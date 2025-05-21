import { useTranslations } from "next-intl";

import { Button } from "./shared/Button";
import { ListStyleTypeFourSquare } from "./shared/ListStyleTypeFourSquare";
import { Section } from "./shared/Section";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const descriptionList = [
    t("descriptionItem1"),
    t("descriptionItem2"),
    t("descriptionItem3"),
  ];

  return (
    <Section className="pt-8 pb-[88px] relative bg-blackCustom clip-path-down-cut-mobile ">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <h1 className="uppercase font-exo font-semibold text-3xl text-title mb-4">
        {t.rich("title", {
          br: () => <br />,
        })}
      </h1>
      <div className="bg-slate-500 w-full h-auto aspect-[288/170] mb-8"></div>
      <ul className="flex flex-col gap-3 mb-10">
        {descriptionList.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 uppercase text-sm13 font-medium"
          >
            <div>
              <ListStyleTypeFourSquare index={4} />
            </div>
            {item}
          </li>
        ))}
      </ul>
      <Button />
    </Section>
  );
};
