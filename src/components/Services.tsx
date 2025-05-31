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
      imageURL: "/images/image1.png",
    },
    {
      title: t("specializationItemTitle2"),
      text: t("specializationItemDescription2"),
      list: [
        t("specList2Item1"),
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
      className="mt-[-30px] tab:mt-[-50px] relative pb-[90px] tab:pb-[100px] clip-path-down-cut-mobile-service tab:clip-path-down-cut-tab-service"
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
      <Union className="absolute top-[16px] tab:top-[26.4px] left-1/2 -translate-x-1/2 w-[186px] tab:w-[341px] h-auto z-[2]" />
      <h3 className="absolute top-[21px] tab:top-[43px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("services")}
      </h3>
      <div className=" relative pt-[78px] tab:pt-[129px] pc:pt-[133px] px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <h1 className="font-exo font-semibold text-3xl tab:text-4xl pc:text-5xl text-title uppercase mb-8 w-[250px]">
          {t("specializationTitle")}
        </h1>
        <ul className="pc:ml-[375px]">
          {servicesList.map((item, index) => (
            <li
              key={index}
              className="border-t border-black30 last:border-b pt-5 pc:pt-6 pb-6"
            >
              <Accordion item={item} index={index} />
            </li>
          ))}
        </ul>
        <div className="hidden pc:block w-9 h-9 border-l border-b absolute bottom-0 left-[60px]" />
        <div className="hidden pc:block w-9 h-9 border-r border-t absolute top-[133px] right-[60px]" />
      </div>
    </section>
  );
};
