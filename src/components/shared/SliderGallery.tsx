"use client";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./Slider/SliderButtons";
import { useDotButton } from "./Slider/SliderDots";
import { SliderSquareBox } from "./Slider/SliderSquareBox";

type ProjectWithImage = {
  title: string;
  imageURL: string;
  videoURL?: never;
};

type ProjectWithVideo = {
  title: string;
  videoURL: string;
  imageURL?: never;
};

export type ProjectType = (ProjectWithImage | ProjectWithVideo)[];

export const SliderGallery = ({ projects }: { projects: ProjectType }) => {
  const options: EmblaOptionsType = {
    loop: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative min-w-full">
      <div className=" overflow-hidden" ref={emblaRef}>
        <div className=" flex">
          {projects.map(project => (
            <div
              key={project.title}
              className="flex-[0_0_100%] tab:flex-[0_0_46%] w-full px-[5px] pc:px-3"
            >
              {project.imageURL ? (
                <Image
                  src={project.imageURL}
                  alt={project.title}
                  width={578}
                  height={325}
                  className="aspect-[288/161] object-cover w-full h-auto mb-2 pc:mb-3"
                />
              ) : null}
              <p className=" uppercase font-bold pc:text-lg">{project.title}</p>
            </div>
          ))}
        </div>
        <div className="tab:absolute tab:top-[-92px] pc:top-[-100px] tab:right-0 mt-12 ">
          <div className="flex justify-between gap-4 tab:gap-5 pc:gap-6">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <SliderSquareBox
              scrollSnaps={scrollSnaps}
              selectedIndex={selectedIndex}
              sliders={projects}
              onDotButtonClick={onDotButtonClick}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
