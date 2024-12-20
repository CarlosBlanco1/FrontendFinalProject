"use client";

import Providers from "@/authentication/Providers";
import "./globals.css";
import NavBar from "@/components/nav/NavBar";
import ToastContextProvider from "../components/toasts/ToastContextProvider";
import ErrorBoundary from "@/components/Error/ErrorBoundary";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Providers>
          <ToastContextProvider>
            <ErrorBoundary>
              <div className="h-[8%] flex items-center">
                <NavBar />
              </div>
              <div className="h-[92%]">{children}</div>
            </ErrorBoundary>
          </ToastContextProvider>
        </Providers>
      </body>
    </html>
  );
}
