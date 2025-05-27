import Image from "next/image";
import { useTranslations } from "next-intl";

import { Menu } from "./Header/Menu";
import { SocialLinks } from "./Header/SocialLinks";
import { IconLogo } from "./Icons/IconLogo";
import { CallUsInfo } from "./shared/CallUsInfo";
import { UpToTopStatic } from "./shared/UpToTopStatic";

export const Footer = () => {
  const t = useTranslations("HomePage");

  return (
    <footer className="relative overflow-hidden  pb-[183px] tab:pb-[80px] pc:pb-10">
      <div className="absolute inset-0 z-[-1] flex justify-center">
        <Image
          src="/bg/kolo.svg"
          alt="circle decor"
          width={2000}
          height={2000}
          className="absolute top-6 pc:top-4 left-1/2 -translate-x-1/2 w-[150vw] max-w-none h-auto"
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
      <div>
        <Image
          src="/images/dronFront.png"
          alt="dron front"
          width={671}
          height={409}
          className="w-[70%] min-w-[288px] max-w-[540px] tab:max-w-[631px] pc:max-w-[671px] mx-auto -mt-8"
        />
      </div>
      <div className="px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <IconLogo className="mx-auto w-[200px] tab:w-[246px] pc:w-[305px] h-auto mb-px" />
        <p className="text-sm1 pc:text-base13 text-title font-exo font-semibold leading-[10px] uppercase text-center mb-8 tab:mb-[52px] pc:mb-[65px]">
          {t("slogan")}
        </p>
        <div className="tab:flex tab:justify-between tab:mb-[104px] pc:mb-[56px]">
          <Menu className="hidden tab:flex tab:flex-col tab:justify-between pc:flex-row pc:w-[366px] pc:justify-between" />
          <CallUsInfo footer />
          <SocialLinks className="mt-6 mb-8 tab:my-0 tab:flex-col tab:justify-between tab:text-sm1 pc:w-[308px] pc:flex-row pc:text-base pc:mr-[103px]" />
        </div>
        <div className="flex text-sm1 uppercase  justify-between">
          <div className="w-1/2 pc:w-1/3">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 tab:mb-3 w-[144px] tab:w-full"
            >
              {t("policy")}
            </a>
            <p className="w-[144px] tab:w-full ">
              &#169; ANVIL. {t("privacy")}
            </p>
          </div>
          <div className="pc:flex flex-col gap-2 font-exo hidden pc:mr-12 pc:w-1/3">
            <a
              href="tel:+380955076901"
              className="text-title text-lg13 font-semibold text-center"
            >
              +380 95 507 69 01
            </a>
            <a
              href="mailto:anvil_technologi@ukr.net"
              className="text-title text-lg13 font-semibold text-center pc:lowercase"
            >
              anvil_technologi@ukr.net
            </a>
          </div>
          <div className="w-1/2 text-right pc:w-1/3">
            <div className="mb-4 tab:mb-3 tab:flex tab:gap-2 tab:justify-end pc:justify-start pc:pl-3">
              <p className="">{t("design")}</p>
              <a target="_blank" rel="noopener noreferrer">
                {t("stoliarova")}
              </a>
            </div>
            <div className="tab:flex tab:gap-2 tab:justify-end pc:justify-start pc:pl-3">
              <p>{t("development")}</p>
              <a target="_blank" rel="noopener noreferrer">
                {t("trynkal")}
              </a>
            </div>
          </div>
        </div>
      </div>
      <UpToTopStatic className="w-11 h-11 pc:w-12 pc:h-12 absolute bottom-[109px] tab:bottom-[156px] pc:bottom-10 pc:right-[60px] tab:right-5 tab:left-auto tab:translate-x-0 left-1/2 -translate-x-1/2" />
    </footer>
  );
};
