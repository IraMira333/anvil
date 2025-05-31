import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { selectedLink } from "@/utils/selectedLink";

import { IconArrowsDown } from "./Icons/IconArrowsDown";
import { Union } from "./Icons/Union";
import LoopFadeMotionText from "./shared/LoopFadeMotionText";
import { VacancyModalWrapper } from "./VacancyModalWrapper";

export const Vacancies = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const vacanciesList = [
    t("vacancyItem1"),
    t("vacancyItem2"),
    t("vacancyItem3"),
    t("vacancyItem4"),
    t("vacancyItem5"),
  ];
  return (
    <section
      id="vacancy"
      className="relative pb-[120px] mx-auto -mt-8 tab:mt-[-50px] overflow-hidden"
    >
      <Union className="absolute top-[18.5px] tab:top-[26px] left-1/2 -translate-x-1/2 w-[186px] tab:w-[341px] h-auto z-[2]" />
      <h3 className="absolute top-[24px] tab:top-[42px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
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
      <div className="relative z-[-1] overflow-hidden mb-4 flex justify-center tab:hidden">
        <Image
          src="/images/imageJob.png"
          alt={t("vacanciesListTitle")}
          width={600}
          height={600}
          className="min-w-[288px] min-h-[288px] w-[100vw] h-auto max-w-[540px] max-h-[540px] pc:max-w-[600px] pc:max-h-[600px] aspect-square bg-[#141414] opacity-[0.45]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[288px] w-[70%] max-w-[330px] h-auto">
          <h2 className="font-exo text-title text-2xl font-semibold uppercase indent-[40px]">
            {t("vacancyTitle")}
          </h2>
          <div className="block w-[11px] h-[18px] border border-r-0 border-accent absolute top-0 left-0" />
          <div className="block w-[11px] h-[18px] border border-l-0 border-accent absolute bottom-0 right-0" />
        </div>
      </div>
      <div className="relative px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto tab:pt-[129px]">
        <div className="relative tab:flex tab:gap-[50px] pc:gap-[90px] pc:mb-[60px]">
          <div className="tab:w-[45%] tab:min-w-[331px] tab:max-w-[600px] pc:w-[600px] tab:h-auto hidden tab:block">
            <Image
              src="/images/imageJob.png"
              alt={t("vacanciesListTitle")}
              width={600}
              height={600}
              className="min-w-[288px] min-h-[288px] w-[100vw] tab:w-[100%] pc:w-[600px] h-auto max-w-[600px] max-h-[600px] aspect-square bg-[#141414] opacity-[0.45]"
            />
          </div>
          <div className="relative mb-[60px] tab:mb-0 tab:w-[48%]">
            <div className="relative hidden tab:block tab:mb-3 pc:mb-5">
              <h2 className="font-exo text-title text-2xl tab:text-xl pc:text-4xl12 font-semibold uppercase indent-[90px] tab:indent-[50px]">
                {t("vacancyTitle")}
              </h2>
              <div className="block tab:w-[6px] pc:w-[10px] tab:h-[14px] pc:h-[25px] border border-r-0 border-accent absolute top-[6px] pc:top-[10px] left-0" />
              <div className="block tab:w-[6px] pc:w-[10px] tab:h-[14px] pc:h-[25px]  border border-l-0 border-accent absolute bottom-[6px] right-0" />
            </div>
            <p className="text-base13 pc:text-lg13 mb-6 pc:mb-[116px] mr-4 tab:mr-0">
              {t("vacancyDescription")}
            </p>
            <div className="tab:hidden pc:flex">
              <h2 className=" font-exo text-title pc:text-lg uppercase font-semibold mb-[26px] pc:w-1/2">
                {t("vacanciesListTitle")}
              </h2>
              <ul className="flex flex-col gap-4 pc:w-1/2">
                {vacanciesList.map((item, index) => (
                  <li key={index} className=" flex items-center gap-4">
                    <div>
                      <div className="w-1 h-1 bg-accent" />
                    </div>
                    <p className="uppercase pc:text-lg11">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" absolute w-[15px] h-full top-0 right-0 tab:left-[-33px] pc:left-[-52px] flex flex-col justify-between text-title20">
              <IconArrowsDown />
              <IconArrowsDown />
              <IconArrowsDown />
            </div>
          </div>
          <div className="absolute border-t border-l border-corner tab:w-5 tab:h-5 pc:w-9 pc:h-9  tab:top-0 tab:left-0 " />
          <div className="absolute border-b border-r border-corner tab:w-5 tab:h-5 pc:w-9 pc:h-9 tab:bottom-0 tab:right-0 pc:bottom-0 pc:right-0" />
        </div>
        <div className="hidden tab:flex pc:hidden tab:gap-[50px] tab:mt-8 tab:mb-[56px]">
          <h2 className="tab:w-[45%] tab:min-w-[331px] text-right font-exo text-title uppercase font-semibold mb-[26px]">
            {t("vacanciesListTitle")}
          </h2>
          <ul className="flex flex-col gap-4 tab:w-[48%]">
            {vacanciesList.map((item, index) => (
              <li key={index} className=" flex items-center gap-4">
                <div>
                  <div className="w-1 h-1 bg-accent" />
                </div>
                <p className="uppercase">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab:flex tab:gap-5 pc:justify-between">
          <div className="tab:w-[45%] pc:w-[600px] tab:min-w-[331px] ">
            <div className="relative w-[288px] h-auto mx-auto tab:mx-0 tab:w-[331px] pc:w-[580px] ">
              <h2 className=" font-exo text-title text-[23px] pc:text-4xl12 font-semibold uppercase indent-[40px] tab:indent-[100px] pc:indent-[170px] tab:w-[95%] ">
                <LoopFadeMotionText text={t("formTitle")} />
              </h2>
              <div className="block w-[11px] h-[18px] tab:w-[6px] pc:w-[10px] tab:h-[14px] pc:h-[25px] border border-r-0 border-accent absolute top-0 tab:top-[6px] pc:top-[10px] left-0" />
              <div className="block w-[11px] h-[18px] tab:w-[6px] pc:w-[10px] tab:h-[14px] pc:h-[25px] border border-l-0 border-accent absolute bottom-0 tab:bottom-[6px] right-0" />
            </div>
            <div className="hidden tab:flex gap-2 text-sm13 pc:text-lg12 tab:mt-7 pc:mt-[50px] tab:w-[256px] pc:w-[375px]">
              <div>
                <span className="block w-2 h-2 bg-accent mt-1"></span>
              </div>
              <p className="">
                {t.rich("policyAccept", {
                  policy: chunk => (
                    <a
                      href={selectedLink(locale)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold hover:font-bold hover:text-[15px] pc:hover:text-[19px]"
                    >
                      {chunk}
                    </a>
                  ),
                })}
              </p>
            </div>
          </div>
          <div className="tab:w-[51%]">
            <VacancyModalWrapper />
          </div>
        </div>
        <div className="absolute border-b border-l border-corner tab:w-5 tab:h-5 pc:w-9 pc:h-9  tab:bottom-0 tab:left-5 pc:bottom-0 pc:left-[60px]" />
        <div className="absolute border-b border-r border-corner tab:w-5 tab:h-5 pc:w-9 pc:h-9  tab:bottom-0 tab:right-5 pc:bottom-0 pc:right-[60px]" />
      </div>
    </section>
  );
};
