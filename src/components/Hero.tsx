import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "./shared/Button";
import { ListStyleTypeFourSquare } from "./shared/ListStyleTypeFourSquare";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const descriptionList = [
    t("descriptionItem1"),
    t("descriptionItem2"),
    t("descriptionItem3"),
  ];

  return (
    <section className="pt-8 pb-[88px] relative bg-blackCustom clip-path-down-cut-mobile ">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <h1 className="uppercase font-exo font-semibold text-3xl text-title mb-4">
          {t.rich("title", {
            br: () => <br />,
          })}
        </h1>
        <div className=" w-full h-auto aspect-[288/170] mb-8">
          <Image
            src="/images/dron.png"
            alt="fpv"
            width={757}
            height={447}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col gap-10 justify-center mx-auto max-w-[330px]">
          <ul className="flex flex-col gap-3 font-exo text-title ">
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
          <div className="mx-auto">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};
