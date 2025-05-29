import { motion } from "framer-motion";
import Image from "next/image";

import { CallUsInfo } from "../shared/CallUsInfo";
import { Menu } from "./Menu";
import { SocialLinks } from "./SocialLinks";

export interface HeaderMenuProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: (_value: boolean) => void;
}

export const MobileMenu = ({
  isHeaderMenuOpened = false,
  setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
  return (
    <motion.nav
      initial={{ height: 0 }}
      animate={{ height: isHeaderMenuOpened ? "100vh" : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="tab:hidden absolute top-0 left-0 z-[7] w-[100vw] px-4 pc:px-8 overflow-hidden bg-blackCustom "
    >
      <div className="relative flex flex-col justify-between h-full pt-[65px] pb-[100px]">
        <Image
          src="/bg/target.svg"
          alt="background image svg - target"
          width={252}
          height={253}
          className="absolute z-[-1] top-[69px] left-1/2 -translate-x-1/2"
        />
        <Menu
          onClick={() => setIsHeaderMenuOpened(false)}
          className="flex flex-col gap-6 items-center mt-[65px]"
        />
        <div className="flex flex-col gap-6 mt-auto">
          <CallUsInfo />
          <SocialLinks className="" />
        </div>
      </div>
    </motion.nav>
  );
};
