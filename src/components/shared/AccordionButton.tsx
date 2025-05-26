import { IconArrowAcordion } from "../Icons/IconArrowAcordion";
import { IconEmpty } from "../Icons/IconEmpty";

export const AccordionButton = ({ className }: { className?: string }) => {
  return (
    <div className=" relative w-7 h-7 tab:w-9 tab:h-9 pc:w-12 pc:h-12 text-accent bg-transparent hover:bg-radial-green-button transition-all duration-300 ease-in-out ">
      <IconEmpty className="  w-7 h-7 tab:w-9 tab:h-9 pc:w-12 pc:h-12" />
      <IconArrowAcordion
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
      />
    </div>
  );
};
