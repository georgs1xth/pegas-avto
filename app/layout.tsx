// export const runtime = 'edge'; // 'nodejs' is the default
// execute this function on iad1 or hnd1, based on the connecting client location
// export const preferredRegion = ['fra1', 'hnd1'];

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ruRU } from "@clerk/localizations"

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server";
import { SpeedInsights } from "@vercel/speed-insights/next"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
} from '@clerk/nextjs'
import { OurFileRouter } from "./api/uploadthing/core";
import { ToastProvider } from "@/components/providers/toaster-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const localization = {
  ...ruRU,
}

export const metadata: Metadata = {
  title: {
    default: "Пегас avto A",
    template: "%s | Пегас avto A",
  },
 
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
        <Head>
          <meta name="yandex-verification" content="2bb381a9224af3e5" />
        </Head>
        <body className="{inter.className} h-screen">
          <ToastProvider />
          <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(OurFileRouter)}
        />
          {children}
          <SpeedInsights/>
        </body>
      </html>
    </ClerkProvider>
  );
}
