"use client";

import { useAuth } from "react-oidc-context";
import Image from "next/image";

export const LogInLogOut = () => {
  const auth = useAuth();

  if (!auth || auth.isLoading || typeof auth.isAuthenticated === "undefined") {
    return <div>Loading...</div>;
  }

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <>
        <div className="flex items-center gap-1">
          <Image
            src="/logout.svg"
            width={24}
            height={24}
            alt="profile"
          />
          <button
            onClick={() => {
              document.cookie = `jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
              void auth.signoutRedirect();
            }}
          >
            Sign out
          </button>
        </div>
      </>
    );
  }

  return (
    <button
      onClick={() => void auth.signinRedirect()}
      className="flex items-center gap-1"
    >
      <Image
        src="/login.svg"
        width={24}
        height={24}
        alt="login"
      ></Image>
      Sign in
    </button>
  );
};
