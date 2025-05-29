import { useTranslations } from "next-intl";

import { DecorGrid } from "./shared/DecorGrid";

export const Team = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="team"
      className=" relative pt-[65px] tab:pt-[79px] pc:pt-[60px] pc:pb-[132px] pb-[122px] tab:pb-[159px] font-exo text-title uppercase "
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat  "
          style={{
            backgroundImage: "url('/images/imageTeam.jpg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "top center",
          }}
        />
        <div className="absolute inset-0 bg-blackCustom opacity-[0.35]" />
        <div className="absolute inset-0 bg-black z-[-3]" />
      </div>
      <div className="px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <div className="flex gap-2 tab:gap-4 pc:gap-6 justify-center  text-sm13 tab:text-base13 pc:text-lg13 mb-[161px] tab:mb-[298px]">
          <p className=" font-semibold w-[47%] text-right">
            {t("ourTeamTitle")}
          </p>
          <div className="w-[47%] font-medium ">
            <p className="tab:w-[250px] pc:w-[315px]">
              {t("ourTeamTitleContinue")}
            </p>
          </div>
        </div>
        <div className=" tab:flex tab:justify-center tab:items-end tab:gap-4 pc:gap-6">
          <div className="tab:w-1/2">
            <h2 className=" font-semibold text-3xl tab:text-4xl pc:text-5xl text-right mb-4 tab:mb-0 w-[288px] tab:w-[355px] pc:w-[643px] ml-auto mr-0 ">
              {t("ourTeamDescription")}
            </h2>
          </div>
          <div className="tab:w-1/2">
            <p className="font-medium text-sm13 tab:text-base13 pc:text-lg13 text-right tab:text-left tab:mt-auto w-[146px] tab:w-[170px] pc:w-[200px] ml-auto mr-0 tab:mx-0">
              {t("slogan")}
            </p>
          </div>
        </div>
      </div>
      <DecorGrid />
      <div className="hidden tab:block absolute top-[79px] pc:top-[58px] left-[calc(50%-152px)] pc:left-[calc(50%-176px)] w-6 h-[65px] border border-r-0 border-accent"></div>
      <div className="hidden tab:block absolute top-[79px] pc:top-[58px] right-[calc(50%-266px)] pc:right-[calc(50%-336px)] w-6 h-[65px] border border-l-0 border-accent"></div>
    </section>
  );
};
