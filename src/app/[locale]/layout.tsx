import "./globals.css";

import type { Metadata } from "next";
import { Exo_2, Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { routing } from "@/i18n/routing";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anvil",
  description: "Anvil",
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${exo.variable} ${robotoMono.variable} antialiased overflow-x-visible`}
      >
        <NextIntlClientProvider>
          <header></header>
          <main>{children}</main>
          <footer></footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
