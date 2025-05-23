import { useTranslations } from "next-intl";

export const Button = ({ joinUs }: { joinUs?: boolean }) => {
  const t = useTranslations("Buttons");
  const text = joinUs ? t("joinUs") : t("callUs");

  return (
    <div className="relative w-[288px] h-[56px] group">
      <button
        className={`${joinUs ? "text-title bg-title20 border border-title20  group-hover:border-accent/20" : "text-accent bg-radial-green-50 border border-accent/20"} w-[288px] h-[56px] group-hover:text-hoverAccent uppercase  font-bold text-base group-hover:bg-radial-green-100 transition-all duration-300 ease-in-out `}
      >
        {text}
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
