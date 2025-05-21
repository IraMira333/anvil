import { IconArrowAcordion } from "../Icons/IconArrowAcordion";
import { IconEmpty } from "../Icons/IconEmpty";

export const AccordionButton = ({ className }: { className?: string }) => {
  return (
    <div className=" relative w-7 h-7 text-accent bg-transparent hover:bg-radial-green-button transition-all duration-300 ease-in-out ">
      <IconEmpty className="  w-7 h-7" />
      <IconArrowAcordion
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      />
    </div>
  );
};
