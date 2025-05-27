"use client";

import { IconLogo } from "../Icons/IconLogo";
import LanguageSwitcher from "../LanguageSwitcher";
import Navbar from "./Navbar";

export const Header = () => {
  return (
    <>
      <header className="relative  ">
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div
            className="w-full h-full "
            style={{
              backgroundImage: "url('/bg/noise.svg')",
              backgroundPosition: "top center",
            }}
          />
        </div>
        <div className="h-[64px] px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto  flex items-center justify-between ">
          <IconLogo className="relative z-10 w-[72px] tab:w-[92px]" />
          <div className="tab:hidden mr-7 mt-1">
            <LanguageSwitcher />
          </div>
          <nav className="flex tab:gap-5 pc:gap-8 justify-end items-center ">
            <Navbar />
            <div className="hidden tab:flex mr-3 tab:mt-1 pc:mr-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </header>

      <div
        className="relative z-10 w-full h-px bg-title20 tab:w-[calc(100%-40px)] pc:w-[calc(100%-120px)] tab:mx-auto"
        aria-hidden="true"
      ></div>
    </>
  );
};
