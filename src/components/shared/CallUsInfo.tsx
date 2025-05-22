import { useTranslations } from "next-intl";

export const CallUsInfo = () => {
  const t = useTranslations("Menu");
  return (
    <div className="flex flex-col items-center justify-center gap-[18px]">
      <h3 className="text-text text-xs uppercase">{t("callUs")}</h3>
      <div className="flex flex-col gap-1 font-exo">
        <a
          href="tel:+380955076901"
          className="text-title text-lg13 font-semibold text-center"
        >
          +380 95 507 69 01
        </a>
        <a
          href="mailto:anvil_technologi@ukr.net"
          className="text-title text-lg13 font-semibold text-center"
        >
          anvil_technologi@ukr.net
        </a>
      </div>
    </div>
  );
};
