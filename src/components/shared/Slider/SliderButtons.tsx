import { EmblaCarouselType } from "embla-carousel";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import { IconEmpty } from "@/components/Icons/IconEmpty";
import { IconUp } from "@/components/Icons/IconUp";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (_emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type ButtonType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const PrevButton: React.FC<ButtonType> = props => {
  const { disabled, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      aria-label="show previous slide button"
      className="flex justify-center items-center w-10 tab:w-11 pc:w-12 h-10 tab:h-11 pc:h-12 relative bg-transparent hover:bg-radial-green-button transition-all duration-300 ease-out hover:text-accent"
      type="button"
      {...restProps}
    >
      <IconEmpty className="w-10 tab:w-11 pc:w-12 h-10 tab:h-11 pc:h-12" />
      <IconUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90" />
    </button>
  );
};

export const NextButton: React.FC<ButtonType> = props => {
  const { disabled, ...restProps } = props;

  return (
    <button
      disabled={disabled}
      aria-label="show next slide button"
      className="flex justify-center items-center w-10 tab:w-11 pc:w-12 h-10 tab:h-11 pc:h-12 relative bg-transparent hover:bg-radial-green-button transition-all duration-300 ease-out hover:text-accent"
      type="button"
      {...restProps}
    >
      <IconEmpty className="w-10 tab:w-11 pc:w-12 h-10 tab:h-11 pc:h-12" />
      <IconUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90" />
    </button>
  );
};
