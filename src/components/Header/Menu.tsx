"use client";
import { useLocale, useTranslations } from "next-intl";

import ScrambleText from "../shared/ScrambleText";

export const Menu = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  const t = useTranslations("Menu");
  const locale = useLocale();

  const menuList = [
    { name: t("about"), path: "#about" },
    { name: t("services"), path: "#services" },
    { name: t("gallery"), path: "#gallery" },
    { name: t("vacancy"), path: "#vacancy" },
  ];

  const handleLinkClick = (id: string) => {
    if (onClick) onClick();

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ul className={`${className}  `}>
      {menuList.map((content, idx) => {
        return (
          <li key={idx}>
            <button
              onClick={() => handleLinkClick(content.path)}
              className={" uppercase text-title tab:text-sm12 pc:text-base"}
            >
              <ScrambleText text={content.name} locale={locale} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
