import { useTranslations } from "next-intl";

export const Button = ({ joinUs }: { joinUs?: boolean }) => {
  const t = useTranslations("Buttons");
  const text = joinUs ? t("joinUs") : t("callUs");

  return (
    <div className="relative w-[280px] h-[56px]">
      <button className=" w-[280px] h-[56px] bg-radial-green-50 uppercase text-accent font-bold text-base hover:bg-radial-green-100 transition-all duration-300 ease-in-out">
        {text}
      </button>
      <div className="w-3 h-3 border-t-[2px] border-l-[2px] border-accent absolute top-0 left-0"></div>
      <div className="w-3 h-3 border-t-[2px] border-r-[2px] border-accent  absolute top-0 right-0"></div>
      <div className="w-3 h-3 border-b-[2px] border-r-[2px] border-accent  absolute bottom-0 right-0"></div>
      <div className="w-3 h-3 border-b-[2px] border-l-[2px] border-accent  absolute bottom-0 left-0"></div>
    </div>
  );
};
