"use client";
import { useTranslations } from "next-intl";

import { useRouter } from "@/i18n/navigation";

import { Button } from "../shared/Button";
import { DecorGrid } from "../shared/DecorGrid";
import Typewriter from "../shared/Typewriter";

export const NotFoundPage = () => {
  const t = useTranslations("HomePage");
  const text = t("notFound");
  const router = useRouter();
  return (
    <div className="relative w-screen mx-auto h-[calc(100vh-64px)] bg-blackCustom">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className=" relative pt-[35px] tab:pt-[48px] pc:pt-[61px] px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <div className=" absolute top-[25vh] tab:top-[calc(50vh-76px)] pc:top-[calc(50vh-84px)] left-1/2 tab:left-auto tab:right-[calc(50%+16px)] pc:right-[calc(50%+24px)] -translate-x-1/2 tab:translate-x-0">
          <Typewriter textDef={text} />
        </div>
        <div className="absolute z-[1] top-[65vh] tab:top-[calc(50vh+16px)] pc:top-[calc(50vh+24px)] left-1/2 tab:left-[calc(50%+16px)] pc:left-[calc(50%+24px)] -translate-x-1/2 tab:translate-x-0 -translate-y-1/2">
          <Button notFound joinUs onClick={() => router.push("/")} />
        </div>
      </div>
      <DecorGrid notFound />
    </div>
  );
};
