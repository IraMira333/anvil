import Image from "next/image";
import { useTranslations } from "next-intl";

import { Union } from "./Icons/Union";

export const Vacancies = () => {
  const t = useTranslations("HomePage");
  const vacanciesList = [
    t("vacancyItem1"),
    t("vacancyItem2"),
    t("vacancyItem3"),
    t("vacancyItem4"),
    t("vacancyItem5"),
  ];
  return (
    <section id="vacancy" className="relative pb-[60px] mx-auto -mt-8">
      <Union className="absolute top-[18.5px] left-1/2 -translate-x-1/2 w-[186px] h-auto z-[2]" />
      <h3 className="absolute top-[24px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("vacancies")}
      </h3>
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="relative z-[-1] overflow-hidden mb-4 flex justify-center">
        <Image
          src="/images/imageJob.png"
          alt={t("vacanciesListTitle")}
          width={600}
          height={600}
          className="min-w-[288px] min-h-[288px] w-[100vw] h-auto max-w-[600px] max-h-[600px] aspect-square"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[288px] h-auto">
          <h2 className="font-exo text-title text-xl font-semibold uppercase indent-[80px]">
            {t("vacancyTitle")}
          </h2>
          <div className="block w-[11px] h-[18px] border border-r-0 border-accent absolute top-0 left-0" />
          <div className="block w-[11px] h-[18px] border border-l-0 border-accent absolute bottom-0 right-0" />
        </div>
      </div>
      <div className="px-4 tab:px-5 pc:px-60 max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <p className="text-sm13 mb-6">{t("vacancyDescription")}</p>
        <h2 className=" font-exo text-title uppercase font-semibold mb-[26px]">
          {t("vacanciesListTitle")}
        </h2>
        <ul className="flex flex-col gap-4 mb-[60px]">
          {vacanciesList.map((item, index) => (
            <li key={index} className=" flex items-center gap-4">
              <div>
                <div className="w-1 h-1 bg-accent" />
              </div>
              <p className="text-sm11 uppercase">{item}</p>
            </li>
          ))}
        </ul>
        <div className="relative w-[288px] h-auto mx-auto">
          <h2 className=" font-exo text-title text-xl font-semibold uppercase indent-[90px]">
            {t("formTitle")}
          </h2>
          <div className="block w-[11px] h-[18px] border border-r-0 border-accent absolute top-0 left-0" />
          <div className="block w-[11px] h-[18px] border border-l-0 border-accent absolute bottom-0 right-0" />
        </div>
      </div>
    </section>
  );
};
