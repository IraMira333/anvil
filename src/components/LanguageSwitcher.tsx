"use client";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
    }
  }, [pathName, searchParams]);

  return (
    <ul className="flex gap-2 tab:gap-3 tab:text-base pc:text-lg ml-5">
      {locales.map(curLocale => (
        <li key={curLocale}>
          <Link
            href={{
              hash: hash,
              search: searchParams.toString(),
              pathname: pathName,
            }}
            replace
            locale={curLocale}
            scroll={false}
            className={
              curLocale === locale
                ? "text-white hover:text-green-400  transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                : "text-green-400 hover:text-green-400  transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            }
          >
            {curLocale}
          </Link>
        </li>
      ))}
    </ul>
  );
}
