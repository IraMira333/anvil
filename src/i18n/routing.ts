import { defineRouting } from "next-intl/routing";

export const locales = ["uk", "en"] as const;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  localePrefix: "as-needed",
  localeDetection: false,
  // Used when no locale matches
  defaultLocale: "uk",
});
