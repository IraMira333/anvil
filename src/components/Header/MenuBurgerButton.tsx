import { IconClose } from "../Icons/IconClose";
import { IconEmpty } from "../Icons/IconEmpty";
import { IconMenu } from "../Icons/IconMenu";

interface MenuBurgerButtonProps {
  isHeaderMenuOpened: boolean;
  toggleHeaderMenuOpen: () => void;
}

export const MenuBurgerButton = ({
  isHeaderMenuOpened,
  toggleHeaderMenuOpen,
}: MenuBurgerButtonProps) => {
  return (
    <button
      aria-label={isHeaderMenuOpened ? "close menu button" : "open menu button"}
      type="button"
      onClick={toggleHeaderMenuOpen}
      className="relative w-11 h-11 p-1 flex justify-center items-center z-10"
    >
      <IconEmpty className="w-9 h-9" />
      <IconMenu
        className={`absolute transition-opacity duration-300
              ${isHeaderMenuOpened ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
      />

      <IconClose
        className={`absolute transition-opacity duration-300
              ${isHeaderMenuOpened ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
    </button>
  );
};
