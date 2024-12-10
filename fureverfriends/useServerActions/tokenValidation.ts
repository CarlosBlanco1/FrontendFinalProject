"use server";

import { cookies } from "next/headers";
import * as jose from "jose";
import { adopterService } from "@/services/adopterService";
import { ownerService } from "@/services/ownerService";
import { error } from "console";

export async function validateAndGetUser() {
  const payload = await Validate();

  return {
    id: payload?.sub as string,
    firstname: payload?.given_name as string,
    lastname: payload?.family_name as string,
    email: payload?.email as string,
    phone: payload?.phone_number as string,
  };
}

export async function getUserRoleAndObject(email: string) {
  const adopters = await adopterService.getAllAdopters();
  const owners = await ownerService.getAllOwners();

  let userAdopter = adopters.find((a) => a.email == email);
  let userOwner = owners.find((o) => o.email == email);

  if (userAdopter) {
    return { role: "Adopter", object: userAdopter };
  }

  if (userOwner) {
    return { role: "Owner", object: userOwner };
  }

  throw error("user is not registered")
}

export async function Validate() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("jwt_token")?.value;

  const JWKS = jose.createRemoteJWKSet(
    new URL(
      "https://auth.snowse.duckdns.org/realms/carlos-final/protocol/openid-connect/certs"
    )
  );

  if (!jwt) {
    throw error("jwt is undefined");
  }

  const { payload } = await jose.jwtVerify(jwt, JWKS, {
    issuer: "https://auth.snowse.duckdns.org/realms/carlos-final",
    audience: "account",
  });

  return payload;
}
