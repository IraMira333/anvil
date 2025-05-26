import { useTranslations } from "next-intl";

import { Union } from "./Icons/Union";
import { ProjectType, SliderGallery } from "./shared/SliderGallery";

export const Gallery = () => {
  const t = useTranslations("HomePage");
  const projects: ProjectType = [
    { title: t("slide1Title"), imageURL: "/images/slide11.jpg" },
    { title: t("slide2Title"), imageURL: "/images/slide2.jpg" },
    { title: t("slide3Title"), imageURL: "/images/slide31.jpg" },
    { title: t("slide4Title"), imageURL: "/images/slide4.jpg" },
  ];
  return (
    <section
      id="gallery"
      className="relative pt-[65px] tab:pt-[130px] pb-[105px] clip-path-hex-notch-galery tab:clip-path-hex-notch-galery-tab mt-[-45px] tab:mt-[-73px] z-[20] bg-blackCustom"
    >
      <Union className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[186px] tab:w-[341px] h-auto z-[2]" />
      <h3 className="absolute top-[8px] tab:top-5 left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("gallery")}
      </h3>
      <div className="relative px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <h2 className="font-exo font-semibold uppercase text-center tab:text-left text-3xl pc:text-5xl mb-8 pc:mb-12">
          {t("portfolioTitle")}
        </h2>
        <SliderGallery projects={projects} />
      </div>
    </section>
  );
};
