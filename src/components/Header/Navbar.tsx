"use client";
import { useEffect, useState } from "react";

import { Menu } from "./Menu";
import { MenuBurgerButton } from "./MenuBurgerButton";
import { MobileMenu } from "./MobileMenu";

const Navbar = () => {
  const [isHeaderMenuOpened, setIsHeaderMenuOpened] = useState(false);

  const toggleHeaderMenuOpen = () => setIsHeaderMenuOpened(!isHeaderMenuOpened);

  useEffect(() => {
    if (isHeaderMenuOpened) {
      const timer = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 590);

      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "";
    }
  }, [isHeaderMenuOpened]);

  return (
    <>
      <div className="tab:hidden">
        <MenuBurgerButton
          isHeaderMenuOpened={isHeaderMenuOpened}
          toggleHeaderMenuOpen={toggleHeaderMenuOpen}
        />
      </div>
      <MobileMenu
        isHeaderMenuOpened={isHeaderMenuOpened}
        setIsHeaderMenuOpened={setIsHeaderMenuOpened}
      />

      <Menu className="hidden tab:flex tab:gap-5 pc:gap-8" />
    </>
  );
};

export default Navbar;
