import { EmblaCarouselType } from "embla-carousel";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (_index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (_emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (_index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(_index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((_emblaApi: EmblaCarouselType) => {
    setScrollSnaps(_emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((_emblaApi: EmblaCarouselType) => {
    setSelectedIndex(_emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const SliderDots: React.FC<PropType> = props => {
  const { children, ...restProps } = props;

  return (
    <button
      aria-label="show next or previous slide button"
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};
