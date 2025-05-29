import Image from "next/image";
import { useTranslations } from "next-intl";

import { ListStyleTypeFourSquare } from "./shared/ListStyleTypeFourSquare";
import { ConsultationModal } from "./shared/Modal/СonsultationModal";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const descriptionList = [
    t("descriptionItem1"),
    t("descriptionItem2"),
    t("descriptionItem3"),
  ];

  return (
    <section
      id="hero"
      className="pt-8 pb-[88px] relative bg-blackCustom clip-path-down-cut-mobile
    tab:pt-[56px] pc:pt-[60px] tab:pb-[162px] pc:pb-[110px] tab:clip-path-down-cut-tab "
    >
      <div className="hidden tab:block absolute inset-0 z-[-4] overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat rotate-180 pc:mb-[70px]"
          style={{
            backgroundImage: "url('/bg/web-radial.svg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "bottom center",
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-5] overflow-hidden">
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
          <h1 className="min-h-[112px] tab:min-h-[144px] pc:min-h-[192px] uppercase font-exo font-semibold text-3xl tab:text-4xl pc:text-5xl text-title mb-4 tab:mb-0 max-w-[400px] tab:max-w-[500px] pc:max-w-[600px]">
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

        <div className="flex-1 flex items-center justify-center pc:mt-12 ">
          <div
            id="hero-model-anchor"
            className="relative w-full tab:w-[75%] tab:max-w-[550px] pc:max-w-[748px] aspect-[288/170] tab:aspect-[258/170] pc:aspect-[220/110] z-10"
          >
            <Image
              src="/bg/text.svg"
              alt="FPV 7"
              width={610}
              height={207}
              className="w-[80%] absolute top-5 pc:top-[-60px] left-1/2 -translate-x-1/2"
            />
            <Image
              src="/bg/heroScene.svg"
              alt="drone landing pad"
              width={748}
              height={172}
              className="absolute bottom-[25%] tab:bottom-[25%] pc:bottom-[23%] left-1/2 -translate-x-1/2"
            />
          </div>
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
          <div className="mx-auto w-[288px] tab:ml-auto tab:mr-0 pc:mt-[-19px]">
            <p className="hidden tab:block mb-5 text-base12 tab:min-w-[57px]">
              {t("text")}
            </p>
            <ConsultationModal />
          </div>
        </div>
      </div>
    </section>
  );
};
