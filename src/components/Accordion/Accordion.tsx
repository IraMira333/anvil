"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { IconPlay } from "../Icons/IconPlay";
import { AccordionButton } from "../shared/AccordionButton";
import { FourSquaresRow } from "../shared/FourSquaresRow";

interface AccordionProps {
  title: string;
  text: string;
  list?: string[];
  imageURL?: string | string[];
  full?: boolean;
}

export function Accordion({
  item,
  index,
}: {
  item: AccordionProps;
  index: number;
}) {
  const [isAccordionOpen, setAccordionOpen] = useState(index === 0);
  const [contentHeight, setContentHeight] = useState(index === 0 ? 999 : 0);
  const contentRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    if (index === 0 && contentRef.current) {
      const updateHeight = () => {
        const scrollHeight = contentRef.current!.scrollHeight;
        const extraMargin = 16;
        setContentHeight(scrollHeight + extraMargin);
      };

      // 1. Одразу після mount
      updateHeight();

      // 2. Після повного завантаження зображень
      const images = contentRef.current.querySelectorAll("img");
      let loadedCount = 0;

      images.forEach(img => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener("load", () => {
            loadedCount++;
            if (loadedCount === images.length) {
              updateHeight();
            }
          });
        }
      });
    }
  }, [index]);

  const toggleAccordion = () => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      const extraMargin = 16;
      setContentHeight(isAccordionOpen ? 0 : scrollHeight + extraMargin);
      setAccordionOpen(prev => !prev);
    }
  };

  return (
    <div className="w-full p-0 m-0">
      <button
        aria-label="open answer button"
        onClick={toggleAccordion}
        className="w-full outline-none text-left cursor-pointer pc:flex pc:items-start pc:gap-6"
      >
        <div className="flex items-center justify-between gap-4 mb-3">
          <FourSquaresRow index={index + 1} />
          {!item.full ? (
            <div className="pc:hidden">
              <AccordionButton
                className={`transition-transform duration-300 ${
                  isAccordionOpen ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>
          ) : null}
        </div>
        <div className="pc:flex pc:items-start pc:justify-between w-full tab:w-[93%]">
          <div>
            <p className="font-exo mb-3 font-semibold text-title uppercase pc:text-lg">
              {item.title}
            </p>
            <p className="text-base12 pc:w-[678px]">{item.text}</p>
          </div>
          {!item.full ? (
            <div className="hidden pc:block">
              <AccordionButton
                className={`transition-transform duration-300 ${
                  isAccordionOpen ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>
          ) : null}
        </div>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{
          maxHeight: `${contentHeight}px`,
        }}
      >
        <div
          className={`transition-[padding-top] duration-500 ease-in-out ${
            isAccordionOpen ? "pt-4 tab:pt-5 pc:pt-4" : "pt-0"
          }`}
        >
          <div
            ref={contentRef}
            className="tab:flex tab:gap-5 tab:items-center pc:ml-[82px]"
          >
            {item.imageURL ? (
              <div className="w-full tab:w-[39%] aspect-[282/176] h-auto mb-4 tab:mb-0 ">
                {Array.isArray(item.imageURL) ? (
                  <div className=" tab:flex tab:gap-2">
                    {item.imageURL.map((url: string, idx: number) => (
                      <Image
                        key={idx}
                        src={url}
                        alt={`${item.title} ${idx + 1}`}
                        width={282}
                        height={176}
                        className="w-full h-auto aspect-[282/176] object-cover "
                      />
                    ))}
                  </div>
                ) : (
                  <Image
                    src={item.imageURL}
                    alt={`${item.title}`}
                    width={578}
                    height={325}
                    className="w-full h-full aspect-[282/176] object-cover"
                  />
                )}
              </div>
            ) : null}
            {item.list ? (
              <ul className="flex flex-col gap-4 tab:pr-12 tab:text-base12">
                {item.list.map((listItem: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <IconPlay />
                    </div>
                    {listItem}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
