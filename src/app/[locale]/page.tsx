import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="">
      <h1 className="">{t("about")}</h1>
      <LanguageSwitcher />
    </div>
  );
}
