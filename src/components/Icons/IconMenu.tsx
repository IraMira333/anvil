import { IconProps } from "@/types/iconProps";

export const IconMenu = ({ className }: IconProps) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="menu icon"
    >
      <rect x="3.75" y="3.75" width="10.5" height="1.5" fill="currentColor" />
      <rect x="3.75" y="8.25" width="10.5" height="1.5" fill="currentColor" />
      <rect x="3.75" y="12.75" width="10.5" height="1.5" fill="currentColor" />
    </svg>
  );
};
