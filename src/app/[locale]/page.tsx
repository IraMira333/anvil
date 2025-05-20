import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="">
      <h1 className="">{t("title")}</h1>
    </div>
  );
}
