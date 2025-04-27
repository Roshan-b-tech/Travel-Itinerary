import React from "react";

interface FrameByAnimaProps {
  theme: "light" | "dark";
}

export const FrameByAnima = ({ theme }: FrameByAnimaProps): JSX.Element => {
  return (
    <div className="flex w-full items-center justify-between">
      <h3 className={`font-h3 font-[number:var(--h3-font-weight)] ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]`}>
        Accomodation
      </h3>
      <a
        href="#"
        className={`font-['Mont-Bold',Helvetica] font-bold ${theme === 'dark' ? 'text-[#d1f462]' : 'text-primaryblue'} text-[10px] leading-4 underline`}
      >
        See all
      </a>
    </div>
  );
};
