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

export async function getAdopterAfterValidating(email: string) {
  const adopters = await adopterService.getAllAdopters();
  const adopter = adopters.find((adopter) => adopter.email == email);

  if(adopter == undefined)
  {
    throw error("adopter not found!")
  }

  return adopter
}

export async function isRoleAssigned(email: string) {
  const adopters = await adopterService.getAllAdopters();
  const owners = await ownerService.getAllOwners();
  const users = adopters.concat(owners);

  const user = users.find((u) => u.email == email);
  return Boolean(user);
}

export async function Validate() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("jwt_token")?.value;

  const JWKS = jose.createRemoteJWKSet(
    new URL(
      "https://auth.snowse.duckdns.org/realms/advanced-frontend/protocol/openid-connect/certs"
    )
  );

  if (!jwt) {
    console.log("jwt is undefined");
    return undefined;
  }

  const { payload } = await jose.jwtVerify(jwt, JWKS, {
    issuer: "https://auth.snowse.duckdns.org/realms/advanced-frontend",
    audience: "account",
  });

  return payload;
}
