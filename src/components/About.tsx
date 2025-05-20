import { useTranslations } from "next-intl";

import { Union } from "./Icons/Union";
import { Section } from "./shared/Section";
import { ValueDiv } from "./ValueDiv";

export const About = () => {
  const t = useTranslations("HomePage");
  const valuesList = [
    { title: t("valuesTitle1"), description: t("valuesItem1") },
    { title: t("valuesTitle2"), description: t("valuesItem2") },
    { title: t("valuesTitle3"), description: t("valuesItem3") },
    { title: t("valuesTitle4"), description: t("valuesItem4") },
  ];

  return (
    <Section className="mt-[-30px] relative ">
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
          className="w-full h-full bg-no-repeat bg-center filter blur-[130px] "
          style={{
            backgroundImage: "url('/bg/bgAbout.jpg')",
            backgroundSize: "cover",
          }}
        />
      </div>
      <Union className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[186px] h-auto z-[2]" />
      <h3 className="absolute top-[21px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("about")}
      </h3>
      <div className="h-[100vh] pt-[78px]">
        <h1 className="font-exo font-semibold text-2xl text-title mb-4">
          {t("aboutTitle")}
        </h1>
        <p className="text-sm13 w-[95%]">{t("aboutDescription")}</p>
      </div>
      <div className="pb-[106px]">
        <h2 className="text-center mb-6 font-exo text-title text-2xl font-semibold">
          {t("ourValuesTitle")}
        </h2>
        <ul className="flex flex-col gap-4 ">
          {valuesList.map((item, index) => (
            <li key={index} className="">
              <ValueDiv
                title={item.title}
                description={item.description}
                index={index + 1}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
