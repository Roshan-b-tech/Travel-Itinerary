import React, { useState } from "react";
import { Avatar } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { ThemeToggle } from "../../components/ui/theme-toggle";
import { ActivitiesDetailsByAnima } from "./sections/ActivitiesDetailsByAnima/ActivitiesDetailsByAnima";
import { ActsByAnima } from "./sections/ActsByAnima/ActsByAnima";
import { DetailPane } from "./sections/DetailPane/DetailPane";
import { DivByAnima } from "./sections/DivByAnima/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import { FlightDetailsByAnima } from "./sections/FlightDetailsByAnima/FlightDetailsByAnima";
import { FrameByAnima } from "./sections/FrameByAnima/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima/FrameWrapperByAnima";
import { TokyoByAnima } from "./sections/TokyoByAnima/TokyoByAnima";
import { BottomNavBar } from "../../components/BottomNavBar";

interface MainDashboardProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

interface Activity {
  id: number;
  title: string;
  image: string;
  description: string;
  time: string;
  location: string;
}

export const MainDashboard = ({ theme, onToggleTheme }: MainDashboardProps): JSX.Element => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [selectedDay, setSelectedDay] = useState<string>("MON");
  const [isDetailPaneOpen, setIsDetailPaneOpen] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState("home");
  const [showProfile, setShowProfile] = useState(false);

  const activityData = {
    day: "Day 1",
    date: "27.01.2025",
    count: "3 Activities",
  };

  const handleActivityClick = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsDetailPaneOpen(true);
  };

  const handleCloseDetailPane = () => {
    setIsDetailPaneOpen(false);
    setSelectedActivity(null);
  };

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    // Here you would typically fetch activities for the selected day
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0b0809]' : 'bg-white'} flex justify-center`}>
      <div className={`w-full ${theme === 'dark' ? 'bg-backgrounddark' : 'bg-gray-100'} overflow-hidden relative`}>
        {/* Background blur effects */}
        <div className="relative w-full">
          <div className="absolute w-[146px] h-[141px] top-[189px] right-[-26px] bg-[#c47947] rounded-[73px/70.5px] blur-[200px]" />
          <div className="absolute w-[174px] h-[168px] top-0 left-[81px] bg-[#799df4] rounded-[87px/84px] blur-[200px]" />
          <div className="absolute w-[324px] h-[313px] top-[317px] right-[-62px] bg-[#bfb5ff33] rounded-[162px/156.5px] blur-[200px]" />
          <div className="absolute w-[228px] h-[220px] top-[641px] left-0 bg-[#bfb5ff66] rounded-[114px/110px] blur-[200px]" />
          <div className="absolute w-[228px] h-[220px] top-0 left-0 bg-[#d9d9d966] rounded-[114px/110px] blur-[200px]" />
          <div className="absolute w-[324px] h-[313px] top-[1583px] left-[54px] bg-[#bfb5ff33] rounded-[162px/156.5px] rotate-[-152.62deg] blur-[200px]" />
          <div className="absolute w-[394px] h-[380px] top-[1146px] left-[324px] bg-[#d9d9d966] rounded-[197px/190px] blur-[300px]" />
          <div className="absolute w-[228px] h-[220px] top-[1875px] left-[164px] bg-[#bfb5ff66] rounded-[114px/110px] rotate-[-152.62deg] blur-[200px]" />
        </div>

        {/* Main content container */}
        <div className="relative flex flex-col w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-20">
          {/* Theme Toggle and Avatar */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Avatar className="w-[38px] h-[38px] bg-primaryred rounded-[19px] flex items-center justify-center cursor-pointer" onClick={() => setShowProfile(true)}>
              <div className="relative w-fit [font-family:'Mont-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-4 whitespace-nowrap">
                C
              </div>
            </Avatar>
          </div>

          {/* User profile modal */}
          {showProfile && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className={`relative w-full max-w-sm mx-auto p-6 rounded-2xl shadow-xl border ${theme === 'dark' ? 'border-gray-200 bg-backgrounddark' : 'border-primaryblue bg-white'}`}>
                <div className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 bg-primaryred mb-4">
                    <div className="relative w-fit [font-family:'Mont-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-4 whitespace-nowrap">C</div>
                  </Avatar>
                  <h2 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>User Name</h2>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>user@email.com</p>
                  <div className="w-full border-t my-4"></div>
                  <button className={`w-full py-2 rounded-lg font-semibold ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-primaryblue text-white hover:bg-secondaryblue'} transition-colors`} onClick={() => setShowProfile(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* User profile section */}
          <div className="relative w-full px-4">
            <DivByAnima theme={theme} />
          </div>

          {/* Your Upcoming Trip heading */}
          <div className={`px-4 mt-8 font-h3 font-[number:var(--h3-font-weight)] ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] whitespace-nowrap [font-style:var(--h3-font-style)]`}>
            Your Upcoming Trip
          </div>

          {/* Trip details sections */}
          <div className="relative w-full mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <TokyoByAnima theme={theme} />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <FlightDetailsByAnima theme={theme} />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <FrameByAnima theme={theme} />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <DivWrapperByAnima theme={theme} />
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <FrameWrapperByAnima theme={theme} />
            </div>
          </div>

          {/* Activities section */}
          <div className="relative w-full mt-8">
            <ActivitiesDetailsByAnima onDayChange={handleDayChange} selectedDay={selectedDay} theme={theme} />

            {/* Day indicator */}
            <div className="inline-flex items-center gap-[18px] px-4 mt-4 ml-[28px]">
              <Badge className={`inline-flex h-5 items-center justify-center gap-2.5 p-1 ${theme === 'dark' ? 'bg-primarylight-green' : 'bg-primaryblue'} rounded-lg overflow-hidden`}>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-xs tracking-[0] leading-3 whitespace-nowrap">
                  {activityData.day}
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-xs tracking-[0] leading-3 whitespace-nowrap">
                  {activityData.date}
                </div>
              </Badge>

              <div className="inline-flex items-center gap-1">
                <img
                  className={`w-3.5 h-3.5 ${theme === 'dark' ? 'filter-none' : 'filter-[brightness(0)_saturate(100%)_invert(24%)_sepia(98%)_saturate(2475%)_hue-rotate(210deg)_brightness(98%)_contrast(101%)]'}`}
                  alt="La hiking"
                  src="/la-hiking.svg"
                />
                <div className={`w-fit font-semibold ${theme === 'dark' ? 'text-primarylight-green' : 'text-primaryblue'} leading-3 whitespace-nowrap [font-family:'Montserrat',Helvetica] text-xs tracking-[0]`}>
                  {activityData.count}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ActsByAnima onActivityClick={handleActivityClick} theme={theme} />
            </div>
          </div>
        </div>

        {isDetailPaneOpen && (
          <DetailPane
            activity={selectedActivity}
            onClose={handleCloseDetailPane}
            theme={theme}
          />
        )}
        <BottomNavBar active={activeNav} theme={theme} onNavClick={setActiveNav} />
      </div>
    </div>
  );
};