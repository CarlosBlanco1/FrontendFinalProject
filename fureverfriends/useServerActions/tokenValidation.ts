"use server";

import { cookies } from "next/headers";
import * as jose from "jose";


export async function validateAndGetUser() {
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
  
    // if (await userDoesNotExist(payload.email as string)) {
    //   await createUserServerAction(
    //     payload.given_name as string,
    //     payload.family_name as string,
    //     payload.phone_number as string,
    //     payload.email as string
    //   );
    // }
  
    return {
      id: payload.sub as string,
      firstname: payload.given_name as string,
      lastname: payload.family_name as string,
      email: payload.email as string,
      phone: payload.phone_number as string,
    };
  }
  
//   export async function userDoesNotExist(email: string) {
//     const users = await postgresService.getAllUsers();
//     const user = users.find((user) => user.email === email);
//     return user == undefined;
//   }