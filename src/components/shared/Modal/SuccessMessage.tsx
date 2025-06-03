import Image from "next/image";
import { useTranslations } from "next-intl";

export const SuccessMessage = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="relative z-[-1] overflow-hidden w-screen h-screen">
      <div className="absolute inset-0 z-[-2] w-screen h-screen">
        <Image
          src="/bg/kolo.svg"
          alt="circle decor"
          width={2000}
          height={2000}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[180vw] max-w-none h-auto"
          priority
        />
      </div>{" "}
      <div className="min-w-[288px] w-[80%] max-w-[436px] pc:max-w-[485px] mx-auto mt-[40vh] tab:mt-[50vh] text-center">
        <h2 className="font-exo font-semibold text-2xl13 tab:text-4xl12 uppercase mb-5">
          {t("successTitle")}
        </h2>
        <p className="text-sm13 tab:text-base13 pc:text-lg13">
          {t("successText")}
        </p>
      </div>
    </div>
  );
};
