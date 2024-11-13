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
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
          <div className="flex gap-2 items-center">
            <Image
              src="/profile.svg"
              width={48}
              height={48}
              alt="profile"
              className="rounded-full border border-gray-300"
            />
            <div className="text-gray-800 font-semibold">
              Hello, {auth.user?.profile.name}
            </div>
          </div>
          <button
            onClick={() => {
              document.cookie = `jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
              void auth.signoutRedirect();
            }}
            className="bg-blue-500 text-white font-medium py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
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
      className="bg-blue-500 text-white font-medium py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Sign in
    </button>
  );
};