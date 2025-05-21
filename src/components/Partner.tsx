import Image from "next/image";
import { useTranslations } from "next-intl";

import { Icon1 } from "./Icons/Icon1";
import { Icon2 } from "./Icons/Icon2";
import { Icon3 } from "./Icons/Icon3";
import { Icon4 } from "./Icons/Icon4";
import { Button } from "./shared/Button";
import { Section } from "./shared/Section";

export const Partner = () => {
  const t = useTranslations("HomePage");
  const bestList = [
    {
      title: t("weTheBestItemTitle1"),
      text: t("weTheBestItemDescription1"),
      icon: <Icon1 className="w-9 h-9" />,
    },
    {
      title: t("weTheBestItemTitle2"),
      text: t("weTheBestItemDescription2"),
      icon: <Icon2 className="w-9 h-9" />,
    },
    {
      title: t("weTheBestItemTitle3"),
      text: t("weTheBestItemDescription3"),
      icon: <Icon3 className="w-9 h-9" />,
    },
    {
      title: t("weTheBestItemTitle4"),
      text: t("weTheBestItemDescription4"),
      icon: <Icon4 className="w-9 h-9" />,
    },
  ];

  return (
    <Section className="relative pt-8 pb-[60px] clip-path-hex-notch bg-blackCustom mt-[-46px] z-[2]">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <h1 className="font-exo font-semibold text-2xl text-title mt-[54px] mb-[46px]">
        {t("weTheBestTitle")}
      </h1>
      <p className="text-sm13 w-[194px] ml-auto mr-0 mb-[38px]">
        {t("weTheBestQuote")}
      </p>
      <ul className="mb-[56px]">
        {bestList.map((item, index) => (
          <li
            key={index}
            className="border-b border-black30 last:border-b-0 mt-4"
          >
            <div className="w-9 h-9 mb-6">{item.icon}</div>
            <h4 className="text-title font-semibold mb-4 uppercase">
              {item.title}
            </h4>
            <p className="text-sm12 pb-4">{item.text}</p>
          </li>
        ))}
      </ul>
      <Button />
      <Image
        src="/bg/target.svg"
        alt="background image svg - target"
        width={252}
        height={253}
        className="w-[191px] h-auto absolute z-[-1] top-[124px] right-4 "
      />
    </Section>
  );
};
