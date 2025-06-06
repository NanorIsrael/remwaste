import { FC } from "react";

interface IconWheelProps {
  className?: string;
}

const IconWheel: FC<IconWheelProps> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        opacity="0.5"
        d="M15 9L19 5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.5"
        d="M5 19L9 15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.5"
        d="M9 9L5 5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        opacity="0.5"
        d="M19 19L15 15"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default IconWheel;
