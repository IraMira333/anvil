import { IconProps } from "@/types/iconProps";

export const IconClose = ({ className }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="close icon"
    >
      <rect
        x="6.41284"
        y="4.9987"
        width="17.7845"
        height="2"
        transform="rotate(45 6.41284 4.9987)"
        fill="currentColor"
      />
      <rect
        width="17.7845"
        height="2"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 17.5742 4.9987)"
        fill="currentColor"
      />
    </svg>
  );
};
