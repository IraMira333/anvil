import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="">
      <h1 className="border border-green-400 ">{t("about")}</h1>
      <LanguageSwitcher />
    </div>
  );
}
