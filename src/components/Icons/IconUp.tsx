import { IconProps } from "@/types/iconProps";

export const IconUp = ({ className }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Up to top the page icon"
    >
      <path
        d="M5 11L11 5.5H13L19 11V13.5L13 8H11L5 13.5V11Z"
        fill="currentColor"
      />
      <path d="M13 8H11V19H13V8Z" fill="currentColor" />
    </svg>
  );
};
