import { useLocale } from "next-intl";

import ScrambleText from "../shared/ScrambleText";

export const SocialLinks = ({ className }: { className?: string }) => {
  const whatsapp = "https://wa.me/380955076901";
  const LDLink = "https://www.linkedin.com/";
  const telegram = "https://t.me/anvil_drone";

  const locale = useLocale();

  const socialList = [
    {
      name: "linkedin",
      href: LDLink,
    },
    {
      name: "telegram",
      href: telegram,
    },
    {
      name: "whatsapp",
      href: whatsapp,
    },
  ];
  return (
    <ul className={`${className} flex justify-between `}>
      {socialList.map(content => (
        <li key={content.name} className="uppercase font-bold text-title">
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <ScrambleText text={content.name} locale={locale} />
          </a>
        </li>
      ))}
    </ul>
  );
};
