import "./globals.css";

import { Exo_2, Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Header } from "@/components/Header/Header";
import { routing } from "@/i18n/routing";

const IS_SHOWN_TO_SEARCH_ENGINES =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? false : true;

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
        "uk-UA": "/",
      },
    },
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    openGraph: {
      title: t("aboutTitle"),
      description: t("aboutDescription"),
      type: "website",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "OpenGraph Image",
        },
      ],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="type" property="og:type" content="website" />
        {IS_SHOWN_TO_SEARCH_ENGINES && (
          <meta name="robots" content="noindex,nofollow" />
        )}
      </head>
      <body
        className={`${exo.variable} ${robotoMono.variable} antialiased overflow-x-visible`}
      >
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
