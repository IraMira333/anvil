import { useLocale } from "next-intl";

import ScrambleText from "../shared/ScrambleText";

export const SocialLinks = ({ className }: { className?: string }) => {
  const FBLink = "https://www.facebook.com/";
  const LDLink = "https://www.linkedin.com/";
  const InstaLink = "https://www.instagram.com/";

  const locale = useLocale();

  const socialList = [
    {
      name: "linkedin",
      href: LDLink,
    },
    {
      name: "telegram",
      href: InstaLink,
    },
    {
      name: "whatsapp",
      href: FBLink,
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
