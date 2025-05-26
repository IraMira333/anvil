import "./globals.css";

import { Exo_2, Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import { routing } from "@/i18n/routing";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    alternates: {
      languages: {
        "en-US": "/en",
        "uk-UA": "/uk",
      },
    },
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    openGraph: {
      title: t("aboutTitle"),
      description: t("aboutDescription"),
      type: "landing",
    },
  };
}

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
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta name="image" property="og:image" content="/opengraph.png" />
          <meta name="twitter:image" content="/opengraph.png" />
          <meta name="robots" content="noindex" />
        </head>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
