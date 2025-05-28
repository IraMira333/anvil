import { useTranslations } from "next-intl";

export const CallUsInfo = ({ footer }: { footer?: boolean }) => {
  const t = useTranslations("Menu");
  return (
    <div className="flex flex-col items-center justify-center gap-[18px] tab:gap-8">
      <h3
        className={`${footer ? "text-title pc:ml-12" : "text-text"} text-sm1 pc:text-base uppercase`}
      >
        {t("callUs")}
      </h3>
      <div className="flex flex-col gap-1 font-exo pc:hidden">
        <a
          href="tel:+380955076901"
          className="text-title text-lg13 font-semibold text-center hoverFooter"
        >
          +380 95 507 69 01
        </a>
        <a
          href="mailto:anvil_technologi@ukr.net"
          className="text-title text-lg13 font-semibold text-center hoverFooter"
        >
          anvil_technologi@ukr.net
        </a>
      </div>
    </div>
  );
};
