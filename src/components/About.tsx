import Image from "next/image";
import { useTranslations } from "next-intl";

import { Union } from "./Icons/Union";
import { ValueDiv } from "./shared/ValueDiv";

export const About = () => {
  const t = useTranslations("HomePage");
  const valuesList = [
    { title: t("valuesTitle1"), description: t("valuesItem1") },
    { title: t("valuesTitle2"), description: t("valuesItem2") },
    { title: t("valuesTitle3"), description: t("valuesItem3") },
    { title: t("valuesTitle4"), description: t("valuesItem4") },
  ];

  return (
    <section id="about" className="mt-[-30px] tab:mt-[-50px] relative">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat  "
          style={{
            backgroundImage: "url('/bg/web-radial.svg')",
            backgroundSize: "auto 85%",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat bg-center filter blur-[150px] "
          style={{
            backgroundImage: "url('/bg/bgAbout.jpg')",
            backgroundSize: "cover",
          }}
        />
      </div>
      <Union className="absolute top-[15px] tab:top-[25px] left-1/2 -translate-x-1/2 w-[186px] tab:w-[341px] h-auto z-[2]" />
      <h3 className="absolute top-[21px] tab:top-[41px] tab:text-base left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("about")}
      </h3>
      <div className="px-4 tab:px-[84px] pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <div className="pt-[78px] tab:pt-[129px] pc:pt-[113px] flex flex-col">
          <div className="">
            <h1
              id="tab-about"
              className="min-h-[72px] font-exo font-semibold text-2xl tab:text-3xl pc:text-4xl text-title mb-4 tab:mb-6 pc:mb-4 tab:w-[480px] pc:w-[550px] tab:text-center mx-auto"
            >
              {t("aboutTitle")}
            </h1>
            <p className="w-[95%] min-h-[56px] tab:w-[474px] text-base12 pc:text-lg12 mx-auto pc:w-[520px] tab:text-center">
              {t("aboutDescription")}
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center mt-10">
            <div className="relative w-full tab:max-w-[550px] pc:max-w-[748px]  aspect-[288/170] tab:aspect-[258/170] pc:aspect-[220/110]">
              <Image
                src="/bg/aboutScene.svg"
                alt="drone landing pad"
                width={748}
                height={172}
                className="absolute bottom-[45px] tab:bottom-[40px] pc:bottom-[40px] left-1/2 -translate-x-1/2"
              />
            </div>
          </div>
        </div>

        <div className="pb-[106px] tab:pb-[129px] pc:pb-[140px]">
          <h2 className="text-center mb-9 font-exo text-title text-3xl pc:text-4xl font-semibold">
            {t("ourValuesTitle")}
          </h2>
          <ul className="flex flex-col gap-4 tab:grid tab:grid-cols-2 tab:gap-5 pc:flex pc:flex-row pc:gap-6 pc:justify-center tab:justify-items-center ">
            {valuesList.map((item, index) => (
              <li
                key={index}
                className="mx-auto tab:even:mr-auto pc:even:mr-0 tab:even:ml-0 tab:odd:mr-0 tab:odd:ml-auto pc:odd:ml-0"
              >
                <ValueDiv
                  title={item.title}
                  description={item.description}
                  index={index + 1}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
