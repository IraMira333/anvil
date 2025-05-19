import { IconProps } from "@/types/iconProps";

export const IconArrowAcordion = ({ className }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Arrow icon for opening and closing accordions"
    >
      <path
        d="M19 14L13 8.5H11L5 14V16.5L11 11H13L19 16.5V14Z"
        fill="currentColor"
      />
    </svg>
  );
};
