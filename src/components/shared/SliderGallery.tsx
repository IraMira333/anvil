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

type ProjectType = (ProjectWithImage | ProjectWithVideo)[];

export const SliderGallery = () => {
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

  const projects: ProjectType = [
    { title: "slide1", imageURL: "/images/slide11.jpg" },
    { title: "slide2", imageURL: "/images/slide2.jpg" },
    { title: "slide3", imageURL: "/images/slide31.jpg" },
    { title: "slide4", imageURL: "/images/slide4.jpg" },
  ];

  return (
    <div className="relative min-w-full">
      <div className=" overflow-hidden" ref={emblaRef}>
        <div className=" flex">
          {projects.map(project => (
            <div
              key={project.title}
              className="flex-[0_0_100%] tab:flex-[0_0_40%] w-full px-[5px] pc:px-2"
            >
              {project.imageURL ? (
                <Image
                  src={project.imageURL}
                  alt={project.title}
                  width={578}
                  height={325}
                  className="aspect-[288/161] object-cover w-full h-auto mb-2"
                />
              ) : null}
              <p className=" uppercase font-bold">{project.title}</p>
            </div>
          ))}
        </div>
        <div className="tab:hidden right-0 mt-7 ">
          <div className="flex justify-between gap-4">
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
