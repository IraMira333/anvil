import { useTranslations } from "next-intl";

import { Union } from "./Icons/Union";
import { Button } from "./shared/Button";
import { Section } from "./shared/Section";
import { StagesCard } from "./shared/StagesCard";

export const Stages = () => {
  const t = useTranslations("HomePage");
  const stagesList = [
    { title: t("stagesItemTitle1"), description: t("stagesItemDescription1") },
    { title: t("stagesItemTitle2"), description: t("stagesItemDescription2") },
    { title: t("stagesItemTitle3"), description: t("stagesItemDescription3") },
  ];

  return (
    <Section className="mt-[-30px] relative pb-[105px]">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat  "
          style={{
            backgroundImage: "url('/bg/web-cub.svg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat bg-center filter blur-[80px] "
          style={{
            backgroundImage: "url('/bg/bgAbout.jpg')",
            backgroundSize: "cover",
          }}
        />
      </div>
      <Union className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[186px] h-auto z-[2]" />
      <h3 className="absolute top-[21px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("stages")}
      </h3>
      <div className="pt-[78px] text-center mb-[53px]">
        <h1 className="font-exo font-semibold text-2xl text-title mb-4">
          {t("stagesTitle")}
        </h1>
        <p className="text-sm13 w-[95%]">{t("stagesDescription")}</p>
      </div>
      <ul className="flex flex-col gap-4 mb-[37px]">
        {stagesList.map((item, index) => (
          <li key={index} className="">
            <StagesCard
              title={item.title}
              description={item.description}
              index={index}
            />
          </li>
        ))}
      </ul>
      <Button />
    </Section>
  );
};
