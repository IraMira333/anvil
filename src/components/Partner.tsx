import Image from "next/image";
import { useTranslations } from "next-intl";

import { Icon1 } from "./Icons/Icon1";
import { Icon2 } from "./Icons/Icon2";
import { Icon3 } from "./Icons/Icon3";
import { Icon4 } from "./Icons/Icon4";
import { IconArrows } from "./Icons/IconArrows";
import { ConsultationModal } from "./shared/Modal/СonsultationModal";

export const Partner = () => {
  const t = useTranslations("HomePage");
  const bestList = [
    {
      title: t("weTheBestItemTitle1"),
      text: t("weTheBestItemDescription1"),
      icon: (
        <Icon1 className="w-9 h-9 tab:w-10 tab:h-10 pc:w-[56px] pc:h-[56px]" />
      ),
    },
    {
      title: t("weTheBestItemTitle2"),
      text: t("weTheBestItemDescription2"),
      icon: (
        <Icon2 className="w-9 h-9 tab:w-10 tab:h-10 pc:w-[56px] pc:h-[56px]" />
      ),
    },
    {
      title: t("weTheBestItemTitle3"),
      text: t("weTheBestItemDescription3"),
      icon: (
        <Icon3 className="w-9 h-9 tab:w-10 tab:h-10 pc:w-[56px] pc:h-[56px]" />
      ),
    },
    {
      title: t("weTheBestItemTitle4"),
      text: t("weTheBestItemDescription4"),
      icon: (
        <Icon4 className="w-9 h-9 tab:w-10 tab:h-10 pc:w-[56px] pc:h-[56px]" />
      ),
    },
  ];

  return (
    <section
      id="partner"
      className="relative pt-8 tab:pt-[110px] pc:pt-[90px] pb-[60px] tab:pb-[56px] pc:pb-[63px] clip-path-hex-notch tab:clip-path-hex-notch-tab bg-blackCustom mt-[-46px] tab:mt-[-73px] z-[2]"
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className=" relative px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <div className="tab:flex tab:justify-between tab:mb-[56px]">
          <h1 className="font-exo font-semibold text-3xl pc:text-4xl text-title mt-[54px] tab:mt-0 mb-[46px] tab:mb-0 max-w-[315px] pc:max-w-[418px]">
            {t("weTheBestTitle")}
          </h1>
          <div className=" relative w-[194px] ml-auto mr-0 mb-[38px] tab:mb-0 tab:w-[194px] text-base12 pc:text-lg12 ">
            <p className="">{t("weTheBestQuote")}</p>
            <Image
              src="/bg/target.svg"
              alt="background image svg - target"
              width={252}
              height={253}
              className="w-[191px] h-auto absolute z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
        </div>
        <ul className="mb-[56px] pc:mb-[72px] tab:grid tab:grid-cols-2">
          {bestList.map((item, index) => (
            <li
              key={index}
              className="border-b border-black30 last:border-b-0 tab:last:border-b tab:odd:border-r mt-4 tab:px-4"
            >
              <div className="w-9 h-9 tab:w-10 tab:h-10 pc:w-[56px] pc:h-[56px] mb-6 tab:mb-4 pc:mb-6">
                {item.icon}
              </div>
              <h4 className="text-title font-exo font-semibold mb-4 pc:text-lg uppercase">
                {item.title}
              </h4>
              <p className="text-base12 pb-4 pc:w-[465px] pc:pb-6">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <ConsultationModal />
        </div>

        <IconArrows className="absolute hidden tab:block bottom-5 left-5 pc:left-[60px]" />
        <IconArrows className="absolute hidden tab:block bottom-5 right-5 pc:right-[60px] rotate-180" />
      </div>
    </section>
  );
};
