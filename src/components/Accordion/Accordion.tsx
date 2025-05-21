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
      const scrollHeight = contentRef.current.scrollHeight;
      const extraMargin = 16;
      setContentHeight(scrollHeight + extraMargin);
    }
  }, [index]);

  const toggleAccordion = () => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      const extraMargin = 16; // Додаємо 16px до висоти
      setContentHeight(isAccordionOpen ? 0 : scrollHeight + extraMargin);
      setAccordionOpen(prev => !prev);
    }
  };

  return (
    <div className="w-full p-0 m-0">
      <button
        aria-label="open answer button"
        onClick={toggleAccordion}
        className="w-full outline-none text-left cursor-pointer"
      >
        <div className="flex items-center justify-between gap-4 mb-3">
          <FourSquaresRow index={index + 1} />
          {!item.full ? (
            <AccordionButton
              className={`transition-transform duration-300 ${
                isAccordionOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          ) : null}
        </div>
        <p className="font-exo mb-3 font-semibold text-title uppercase">
          {item.title}
        </p>
        <p className="text-sm12">{item.text}</p>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{
          maxHeight: `${contentHeight}px`,
        }}
      >
        <div
          className="transition-[padding-top] duration-500 ease-in-out"
          style={{
            paddingTop: isAccordionOpen ? "16px" : "0px",
          }}
        >
          <div ref={contentRef} className="">
            {item.imageURL ? (
              <div className="w-full h-auto mb-4">
                {Array.isArray(item.imageURL) ? (
                  item.imageURL.map((url: string, idx: number) => (
                    <Image
                      key={idx}
                      src={url}
                      alt={`${item.title} ${idx + 1}`}
                      width={578}
                      height={325}
                      className="w-full h-full object-cover"
                    />
                  ))
                ) : (
                  <Image
                    src={item.imageURL}
                    alt={`${item.title}`}
                    width={578}
                    height={325}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ) : null}
            {item.list ? (
              <ul className="flex flex-col gap-4">
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
