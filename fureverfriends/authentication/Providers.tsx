"use client";

import { AuthProvider, AuthProviderProps } from "react-oidc-context";

//https://auth.snowse.duckdns.org/realms/carlos-final/.well-known/openid-configuration
const oidcConfig : AuthProviderProps = {
  authority: "https://auth.snowse.duckdns.org/realms/carlos-final/",
  client_id: "carlos-client",
  // redirect_uri: "https://carlos-final.duckdns.org/",
  redirect_uri: "http://localhost:3000/",
  // post_logout_redirect_uri: "https://carlos-final.duckdns.org/",
  post_logout_redirect_uri: "http://localhost:3000/",
  automaticSilentRenew: true,
  onSigninCallback: async (user: any) => {
    const newUrl = window.location.href.split("?")[0];
    window.history.replaceState({}, document.title, newUrl);

    const jwt = user.access_token;

    document.cookie = `jwt_token=${jwt}`;
  },
  onRemoveUser() {
    window.location.href = "";
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
}