import { SliderDots } from "./SliderDots";

interface SliderDotsBoxProps {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotButtonClick: (_index: number) => void;
}

export const SliderSquareBox = <T,>({
  scrollSnaps,
  selectedIndex,
  sliders,
  onDotButtonClick,
}: SliderDotsBoxProps & { sliders: T[] }) => {
  return (
    <div className="tab:hidden flex gap-[6px] items-center">
      {scrollSnaps.map((_, index) => (
        <SliderDots
          key={index}
          style={{
            display:
              selectedIndex === 0
                ? index === selectedIndex + 2
                  ? "flex"
                  : ""
                : selectedIndex === sliders.length - 1
                  ? index === selectedIndex - 2
                    ? "flex"
                    : ""
                  : selectedIndex === index ||
                      selectedIndex - 1 === index ||
                      selectedIndex + 1 === index
                    ? "flex"
                    : "",
          }}
          onClick={() => onDotButtonClick(index)}
          className={`slider-dot ${
            index === selectedIndex ? "slider-dot--selected" : ""
          } 
                ${index > selectedIndex + 1 || index < selectedIndex - 1 ? "hidden" : ""} 
               `}
        />
      ))}
    </div>
  );
};
