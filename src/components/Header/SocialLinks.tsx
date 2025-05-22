export const SocialLinks = ({ className }: { className?: string }) => {
  const FBLink = "https://www.facebook.com/";
  const LDLink = "https://www.linkedin.com/";
  const InstaLink = "https://www.instagram.com/";

  const socialList = [
    {
      name: "linkedin",
      href: LDLink,
    },
    {
      name: "instagram",
      href: InstaLink,
    },
    {
      name: "facebook",
      href: FBLink,
    },
  ];
  return (
    <ul className={`${className} flex  justify-between `}>
      {socialList.map(content => (
        <li key={content.name} className="uppercase font-bold text-title">
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {content.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
