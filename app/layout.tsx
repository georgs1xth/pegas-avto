import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ruRU } from "@clerk/localizations"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

const localization = {
  ...ruRU,
}

export const metadata: Metadata = {
  title: "Пегас avto A",
  description: "Официальный сайт CTO Пегас Avto A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body className="{inter.className} h-screen">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
