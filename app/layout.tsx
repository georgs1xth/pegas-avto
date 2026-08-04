import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ToastProvider } from "@/components/providers/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

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
    // Тема всегда светлая: тёмных элементов на сайте и так много (hero, футер),
    // тёмная тема делала их нечитаемыми. Переключатель убран.
    <html lang="ru" className="light" style={{ colorScheme: "light" }}>
      <body className={`${inter.className} h-screen`}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
