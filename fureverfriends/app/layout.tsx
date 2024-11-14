"use client";

import Providers from "@/authentication/Providers";
import "./globals.css";
import NavBar from "@/app/nav/NavBar";
import ToastContextProvider from "./toasts/ToastContextProvider";
import { BrowserRouter } from "react-router-dom";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <BrowserRouter>
          <Providers>
            <ToastContextProvider>
              <div className="h-[8%] flex items-center">
                <NavBar />
              </div>
              <div className="h-[92%]">
                {children}
              </div>
            </ToastContextProvider>
          </Providers>
        </BrowserRouter>
      </body>
    </html>
  );
}
