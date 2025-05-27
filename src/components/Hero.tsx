import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "./shared/Button";
import { ListStyleTypeFourSquare } from "./shared/ListStyleTypeFourSquare";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const descriptionList = [
    t("descriptionItem1"),
    t("descriptionItem2"),
    t("descriptionItem3"),
  ];

  return (
    <section
      className="pt-8 pb-[88px] relative bg-blackCustom clip-path-down-cut-mobile
    tab:pt-[56px] pc:pt-[60px] tab:pb-[162px] pc:pb-[110px] tab:clip-path-down-cut-tab "
    >
      <div className="hidden tab:block absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat rotate-180 "
          style={{
            backgroundImage: "url('/bg/web-radial.svg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "bottom center",
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <div className="tab:flex tab:justify-between relative">
          <h1 className="uppercase font-exo font-semibold text-3xl tab:text-4xl pc:text-5xl text-title mb-4 tab:mb-0 tab:w-[400px] pc:w-[600px]">
            {t.rich("title", {
              br: () => <br />,
            })}
          </h1>
          <div className="hidden tab:block absolute top-4 right-0 min-w-[211px] min-h-[89px]">
            <Image
              src="/bg/rectangleHero.svg"
              alt="background rectangle"
              width={211}
              height={89}
              className="w-full h-full"
            />
            <div className="absolute text-sm1 top-0 left-0 w-full h-full pt-4 pl-[30px] uppercase z-[-1]">
              <p className="mb-3">{t("lableTitle")}</p>
              <div className="w-[115px]">
                <div className="flex justify-between mb-2">
                  <p>{t("lableR")}</p>
                  <p>{t("lableKM")}</p>
                </div>
                <div className="flex justify-between">
                  <p>{t("lableW")}</p>
                  <p>{t("lableKG")}</p>
                </div>
              </div>
            </div>
            <div className="w-1 h-1 bg-accent absolute top-[-2px] left-[-2px]" />
          </div>
        </div>
        <div className="w-full tab:w-[70%] h-auto mb-8 tab:mb-[83px] pc:mb-5 pc:mt-[-107px] mx-auto">
          <Image
            src="/images/dron.png"
            alt="fpv"
            width={757}
            height={447}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col tab:flex-row gap-10 justify-center tab:justify-between mx-auto max-w-[330px] tab:max-w-full">
          <ul className="flex flex-col gap-3 font-exo text-title tab:w-[288px] pc:w-[400px] pc:mt-6">
            {descriptionList.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 uppercase text-base13 pc:text-lg13 font-medium"
              >
                <div>
                  <ListStyleTypeFourSquare index={4} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <div className="mx-auto w-[288px] ml-auto mr-0 pc:mt-[-19px]">
            <p className="hidden tab:block mb-5 text-base12 tab:min-w-[57px]">
              {t("text")}
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};
