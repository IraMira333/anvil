import { useTranslations } from "next-intl";

export const Button = ({
  disabled,
  joinUs,
  notFound,
  onClick,
}: {
  disabled?: boolean;
  joinUs?: boolean;
  notFound?: boolean;
  onClick?: () => void;
}) => {
  const t = useTranslations("Buttons");
  const text = joinUs ? t("joinUs") : t("callUs");

  return (
    <div className="relative w-[288px] h-12 tab:h-[56px] group bg-blackCustom">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${disabled ? "cursor-none" : "cursor-pointer group-hover:text-hoverAccent group-hover:bg-radial-green-100 "} ${joinUs ? "text-title bg-title20 border border-title20  group-hover:border-accent/20" : "text-accent bg-radial-green-50 border border-accent/20"} w-[288px] h-12 tab:h-[56px] uppercase  font-bold text-base transition-all duration-300 ease-in-out `}
      >
        {notFound ? t("goHome") : text}
      </button>
      <div
        className={`w-3 h-3 border-t-[2px] border-l-[2px] ${joinUs ? "border-title group-hover:border-accent transition-all duration-300 ease-in-out" : "border-accent"}  absolute top-0 left-0`}
      ></div>
      <div
        className={`w-3 h-3 border-t-[2px] border-r-[2px] ${joinUs ? "border-title group-hover:border-accent transition-all duration-300 ease-in-out" : "border-accent"}  absolute top-0 right-0`}
      ></div>
      <div
        className={`w-3 h-3 border-b-[2px] border-r-[2px] ${joinUs ? "border-title group-hover:border-accent transition-all duration-300 ease-in-out" : "border-accent"}  absolute bottom-0 right-0`}
      ></div>
      <div
        className={`w-3 h-3 border-b-[2px] border-l-[2px] ${joinUs ? "border-title group-hover:border-accent transition-all duration-300 ease-in-out" : "border-accent"}  absolute bottom-0 left-0`}
      ></div>
    </div>
  );
};
