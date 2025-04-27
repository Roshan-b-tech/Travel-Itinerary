import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Users } from "lucide-react";

interface TokyoByAnimaProps {
  theme: "light" | "dark";
}

const TripOverviewPane = ({ onClose, theme }: { onClose: () => void; theme: "light" | "dark" }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className={`fixed inset-0 z-50 flex items-start justify-center`}>
      {/* Background overlay */}
      <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}></div>
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={onClose}
          className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'} shadow hover:scale-105 transition-transform`}
        >
          &#8592;
        </button>
      </div>
      <div className={`relative max-w-lg sm:max-w-sm mx-auto p-4 sm:p-6 mt-4 mb-4 rounded-2xl shadow-xl border ${theme === 'dark' ? 'border-gray-200' : 'border-primaryblue'} bg-white dark:bg-backgrounddark overflow-y-auto max-h-screen mx-2`}
        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
        <div
          className="w-full h-[200px] rounded-xl overflow-hidden mb-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={hovered ? "/tokyo.gif" : "/image.png"}
            alt="Tokyo"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Place name centered */}
        <h2 className={`text-3xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          TOKYO
        </h2>
        {/* Date range */}
        <p className={`text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          27.01.2025 - 02.02.2025
        </p>
        {/* Duration and People count with logos */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <img src="/time.png" alt="Duration" className="w-6 h-6" />
            <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>7 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
            <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>4 People</span>
          </div>
        </div>
        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className={`p-4 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors`}>
            Details
          </button>
          <button className={`p-4 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors`}>
            Flight Details
          </button>
          <button className={`p-4 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors`}>
            Accommodation
          </button>
          <button className={`p-4 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors`}>
            Activities
          </button>
        </div>
      </div>
    </div>
  );
};

export const TokyoByAnima = ({ theme }: TokyoByAnimaProps): JSX.Element => {
  const [showOverview, setShowOverview] = useState(false);
  const tripDetails = [
    { label: "Duration", value: "8 Days", icon: "/time.png" },
    { label: "Group Size", value: "4 (2M,2F)", icon: "" },
    { label: "Activities", value: "14", icon: "/mdi-planner-outline.svg" },
  ];

  return (
    <Card className="w-full h-[220px] xs:h-[250px] sm:h-[280px] md:h-[330px] rounded-2xl overflow-hidden relative">
      <img
        className="w-full h-full object-cover"
        alt="Tokyo"
        src="/image.png"
      />

      {/* Blur effects container */}
      <div className="absolute w-full h-[80px] xs:h-[100px] sm:h-[120px] md:h-[159px] bottom-[-90px] left-0">
        {[...Array(10)].map((_, index) => (
          <img
            key={index}
            className="absolute w-full h-full bottom-0 left-0"
            alt="Blur effect"
            src={`/blur-${index + 1}.png`}
          />
        ))}
      </div>

      <div className="absolute inset-0 rounded-2xl overflow-hidden [background:linear-gradient(180deg,rgba(102,102,102,0)_0%,rgba(99,99,99,0.01)_3%,rgba(0,0,0,0.4)_84%)]">
        <CardContent className="p-0 h-full">
          <div className="p-2 xs:p-3 sm:p-4">
            <h2 className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[40px] leading-6 text-white [font-family:'MODERNIZ-Regular',Helvetica] font-normal">
              TOKYO
            </h2>
            <p className="mt-0.5 xs:mt-1 [font-family:'Montserrat',Helvetica] font-semibold text-white text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs leading-4">
              27.01.2025 - 02.02.2025
            </p>
          </div>

          <img
            className="absolute w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 top-1.5 xs:top-2 right-1.5 xs:right-2 sm:top-3.5 sm:right-4 cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-95 hover:shadow-md"
            alt="Bookmark"
            src="/frame-35.svg"
            onClick={() => setShowOverview(true)}
          />

          <div className="absolute bottom-[6px] xs:bottom-[8px] sm:bottom-[10px] md:bottom-[15px] left-[6px] xs:left-[8px] sm:left-[10px] md:left-[22px] flex flex-wrap items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-7">
            {tripDetails.map((detail, index) => (
              <div key={index} className="flex items-center gap-0.5">
                <div className="flex w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 items-center justify-center p-0.5 bg-[#282828] rounded-[19px] overflow-hidden">
                  {detail.icon ? (
                    <img
                      className={index === 0 ? "w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4" : "w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-[18px] md:h-[18px]"}
                      alt={detail.label}
                      src={detail.icon}
                    />
                  ) : detail.label === "Group Size" ? (
                    <Users className="w-4 h-4 text-[#d1f462]" />
                  ) : null}
                </div>
                <div className="flex flex-col items-start">
                  <div className={`mt-[-1.00px] font-semibold text-white leading-3 [font-family:'Montserrat',Helvetica] text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs ${index === 0 ? "w-[30px] xs:w-[35px] sm:w-[40px] md:w-[45px]" : "w-8 xs:w-10 sm:w-12 md:w-14"}`}>
                    {detail.value}
                  </div>
                  <div className={`[font-family:'Montserrat',Helvetica] font-normal text-white text-[6px] xs:text-[7px] sm:text-[8px] md:text-[10px] leading-[10px]`}>
                    {detail.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </div>
      {showOverview && <TripOverviewPane onClose={() => setShowOverview(false)} theme={theme} />}
    </Card>
  );
};