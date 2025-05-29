import { useTranslations } from "next-intl";

import { Union } from "./Icons/Union";
import { AnimatedCard } from "./shared/AnimatedCard";
import { ConsultationModal } from "./shared/Modal/СonsultationModal";
import { StagesCard } from "./shared/StagesCard";

export const Stages = () => {
  const t = useTranslations("HomePage");
  const stagesList = [
    { title: t("stagesItemTitle1"), description: t("stagesItemDescription1") },
    { title: t("stagesItemTitle2"), description: t("stagesItemDescription2") },
    { title: t("stagesItemTitle3"), description: t("stagesItemDescription3") },
  ];

  return (
    <section
      id="stages"
      className="mt-[-30px] tab:mt-[-50px] relative pb-[105px] tab:pb-[131px] pc:pb-[179px]"
    >
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
      <Union className="absolute top-[15px] tab:top-[26.4px] left-1/2 -translate-x-1/2 w-[186px] tab:w-[341px] h-auto z-[2]" />
      <h3 className="absolute top-[21px] tab:top-[43px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("stages")}
      </h3>
      <div className="relative px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <div className="pt-[78px] tab:pt-[129px] pc:pt-[133px] text-center mb-[53px] tab:mb-[56px] max-w-[498px] mx-auto">
          <h1 className="font-exo font-semibold text-3xl pc:text-4xl text-title mb-4 tab:mb-6 pc:mb-4">
            {t("stagesTitle")}
          </h1>
          <p className="text-base13 w-[95%] pc:text-lg12">
            {t("stagesDescription")}
          </p>
        </div>
        <ul className="flex flex-col tab:flex-row tab:flex-wrap gap-4 tab:gap-5 pc:gap-8 mb-[37px] tab:mb-[56px] pc:mb-[60px] justify-center mx-auto max-w-[350px] tab:max-w-full">
          {stagesList.map((item, index) => (
            <AnimatedCard key={index}>
              <StagesCard
                title={item.title}
                description={item.description}
                index={index}
              />
            </AnimatedCard>
          ))}
        </ul>
        <div className="flex justify-center">
          <ConsultationModal />
        </div>
      </div>
    </section>
  );
};
