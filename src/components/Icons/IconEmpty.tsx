import { IconProps } from "@/types/iconProps";

export const IconEmpty = ({ className }: IconProps) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="borders icon"
    >
      <path d="M1 13V1H49V13M1 37V49H49V37" stroke="currentColor" />
    </svg>
  );
};
