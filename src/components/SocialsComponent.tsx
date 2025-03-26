import React from "react";
import { MaskText } from "./MaskText";

type SocialsComponentProps = {
  className?: string;
  color?: string;
  delay?: number;
  hasPhoneNumber: boolean;
};

const SocialsComponent = ({
  className,
  color,
  hasPhoneNumber,
  delay,
}: SocialsComponentProps) => {
  const socials: React.ReactNode[] = [
    <>
      <span className="flex items-center gap-2">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 1C7.5 0.723857 7.27614 0.5 7 0.5L2.5 0.5C2.22386 0.5 2 0.723857 2 1C2 1.27614 2.22386 1.5 2.5 1.5H6.5V5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5L7.5 1ZM1.35355 7.35355L7.35355 1.35355L6.64645 0.646446L0.646447 6.64645L1.35355 7.35355Z"
            fill={color}
          />
        </svg>
        <p>email</p>
      </span>
    </>,
    <>
      <span className="flex items-center gap-2">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 1C7.5 0.723857 7.27614 0.5 7 0.5L2.5 0.5C2.22386 0.5 2 0.723857 2 1C2 1.27614 2.22386 1.5 2.5 1.5H6.5V5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5L7.5 1ZM1.35355 7.35355L7.35355 1.35355L6.64645 0.646446L0.646447 6.64645L1.35355 7.35355Z"
            fill={color}
          />
        </svg>
        <p>linked-in</p>
      </span>
    </>,
    <>
      <span className="flex items-center gap-2">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 1C7.5 0.723857 7.27614 0.5 7 0.5L2.5 0.5C2.22386 0.5 2 0.723857 2 1C2 1.27614 2.22386 1.5 2.5 1.5H6.5V5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5L7.5 1ZM1.35355 7.35355L7.35355 1.35355L6.64645 0.646446L0.646447 6.64645L1.35355 7.35355Z"
            fill={color}
          />
        </svg>
        <p>github</p>
      </span>
    </>,
    <>
      {" "}
      {hasPhoneNumber && (
        <span className="flex items-center gap-2 text-sm pt-2">
          <p>+31648664605</p>
        </span>
      )}
    </>,
  ];

  return (
    <div className={`flex flex-col ${className}`}>
      <MaskText phrases={socials} className={""} startDelay={delay} />
    </div>
  );
};

export default SocialsComponent;
