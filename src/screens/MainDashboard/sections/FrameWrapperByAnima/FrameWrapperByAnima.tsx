import React from "react";

interface FrameWrapperByAnimaProps {
  theme: "light" | "dark";
}

export const FrameWrapperByAnima = ({ theme }: FrameWrapperByAnimaProps): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-between mb-0">
      <h2 className={`font-h3 font-[number:var(--h3-font-weight)] ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]`}>
        Activities
      </h2>
      <a
        href="#"
        className={`font-['Mont-Bold',Helvetica] font-bold ${theme === 'dark' ? 'text-[#d1f462]' : 'text-primaryblue'} text-[10px] tracking-[0] leading-4 underline cursor-pointer`}
      >
        See all
      </a>
    </header>
  );
};
