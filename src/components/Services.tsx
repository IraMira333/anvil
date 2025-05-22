import { useTranslations } from "next-intl";

import { Accordion } from "./Accordion/Accordion";
import { Union } from "./Icons/Union";

export const Services = () => {
  const t = useTranslations("HomePage");
  const servicesList = [
    {
      title: t("specializationItemTitle1"),
      text: t("specializationItemDescription1"),
      list: [
        t("specList1Item1"),
        t("specList1Item2"),
        t("specList1Item3"),
        t("specList1Item4"),
        t("specList1Item5"),
      ],
      imageURL: "/images/image1.jpg",
    },
    {
      title: t("specializationItemTitle2"),
      text: t("specializationItemDescription2"),
      list: [
        t("specList1Item1"),
        t("specList2Item2"),
        t("specList2Item3"),
        t("specList2Item4"),
      ],
      imageURL: "/images/image2.jpg",
    },
    {
      title: t("specializationItemTitle3"),
      text: t("specializationItemDescription3"),
      imageURL: ["/images/image3.png", "/images/image4.png"],
    },
    {
      title: t("specializationItemTitle4"),
      text: t("specializationItemDescription4"),
      full: true,
    },
  ];

  return (
    <section
      id="services"
      className="mt-[-30px] relative pb-[90px] clip-path-down-cut-mobile-service"
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <Union className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[186px] h-auto z-[2]" />
      <h3 className="absolute top-[21px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("services")}
      </h3>
      <div className="pt-[78px] px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <h1 className="font-exo font-semibold text-3xl text-title uppercase mb-8">
          {t("specializationTitle")}
        </h1>
        <ul className="">
          {servicesList.map((item, index) => (
            <li
              key={index}
              className="border-t border-black30 last:border-b pt-5 pb-6"
            >
              <Accordion item={item} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
