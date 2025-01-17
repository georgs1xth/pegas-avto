import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ruRU } from "@clerk/localizations"

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server";

import {
  ClerkProvider,
} from '@clerk/nextjs'
import { OurFileRouter } from "./api/uploadthing/core";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const localization = {
  ...ruRU,
}

export const metadata: Metadata = {
  title: {
    default: "СТО Пегас avto A",
    template: "%s | СТО Пегас avto A",
  },
  description: "Широкий выбор услуг для вашего автомобиля. Ремонт, установка доп. оборудования, заправка автокондиционеров и многое другое.",
  other: { "google-site-verification": "YGfdW5HMTs0VsVfYZmKLqpQm2KfGiOQ5D3a0CUKYr8c"        
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body className={`${inter.className} h-screen`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
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
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
