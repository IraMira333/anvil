import Image from "next/image";
import { useTranslations } from "next-intl";

import { SocialLinks } from "./Header/SocialLinks";
import { IconLogo } from "./Icons/IconLogo";
import { CallUsInfo } from "./shared/CallUsInfo";

export const Footer = () => {
  const t = useTranslations("HomePage");

  return (
    <footer className="relative overflow-hidden pt-8 pb-[183px]">
      <div className="absolute inset-0 z-[-1] flex justify-center">
        <Image
          src="/bg/kolo.png"
          alt="circle decor"
          width={2000}
          height={2000}
          className="
            absolute 
            top-10 
            left-1/2 
            -translate-x-1/2 
            w-[200vw] 
            max-w-none 
            h-auto
          "
          priority
        />
      </div>

      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="pt-[78px] px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <IconLogo className="mt-[205px] mx-auto w-[172px] h-auto mb-px" />
        <p className="text-[8px] font-exo font-semibold leading-[10px] uppercase text-center mb-8">
          {t("slogan")}
        </p>
        <CallUsInfo />
        <SocialLinks className="mt-6 mb-8" />
        <div className="flex text-xs uppercase gap-10 justify-between">
          <div className="w-1/2">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              {t("policy")}
            </a>
            <p className=" ">&#169; ANVIL. All rights reserved.</p>
          </div>
          <div className="w-1/2 text-right">
            <div className="mb-4 ">
              <p className="">{t("design")}</p>
              <a target="_blank" rel="noopener noreferrer">
                {t("stoliarova")}
              </a>
            </div>
            <div>
              <p>{t("development")}</p>
              <a target="_blank" rel="noopener noreferrer">
                {t("trynkal")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
