import { useTranslations } from "next-intl";

import { DecorGrid } from "./shared/DecorGrid";

export const Team = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="team"
      className=" relative pt-[65px] pb-[122px] font-exo text-title uppercase "
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
        <div className="absolute inset-0 bg-[#141414] opacity-[0.35]" />
      </div>
      <div className="px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <div className="flex gap-2 justify-center  text-sm13 mb-[161px]">
          <p className=" font-semibold w-[47%] text-right">
            {t("ourTeamTitle")}
          </p>
          <p className="w-[47%] font-medium ">{t("ourTeamTitleContinue")}</p>
        </div>
        <h2 className=" font-semibold text-3xl text-right mb-4 w-[288px] ml-auto mr-0">
          {t("ourTeamDescription")}
        </h2>
        <p className="font-medium text-sm13 text-right w-[136px] ml-auto mr-0">
          {t("slogan")}
        </p>
      </div>
      <DecorGrid />
    </section>
  );
};
