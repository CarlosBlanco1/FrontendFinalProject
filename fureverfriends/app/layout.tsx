import { LogInLogOut } from "@/authentication/AuthSetUp";
import Providers from "@/authentication/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <LogInLogOut />
          {children}
        </Providers>
      </body>
    </html>
  );
}
