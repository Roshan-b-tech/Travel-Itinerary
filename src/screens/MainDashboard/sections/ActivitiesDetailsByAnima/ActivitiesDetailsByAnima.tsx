import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

interface ActivitiesDetailsByAnimaProps {
  onDayChange: (day: string) => void;
  selectedDay: string;
  theme: "light" | "dark";
}

export const ActivitiesDetailsByAnima = ({ onDayChange, selectedDay, theme }: ActivitiesDetailsByAnimaProps): JSX.Element => {
  const days = [
    { day: "MON", date: "27", month: "JAN", isActive: true },
    { day: "TUE", date: "28", month: "", isActive: false },
    { day: "WED", date: "29", month: "", isActive: false },
    { day: "THU", date: "30", month: "", isActive: false },
    { day: "FRI", date: "31", month: "", isActive: false },
    { day: "SAT", date: "1", month: "FEB", isActive: false },
    { day: "SUN", date: "2", month: "", isActive: false },
  ];

  return (
    <Card className={`w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} rounded-xl overflow-hidden`}>
      <CardContent className="p-3">
        <div className="flex flex-col w-full items-start justify-center gap-[18px]">
          <div className="flex items-center gap-2">
            <Badge className={`inline-flex items-center border py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 ${theme === 'dark' ? 'bg-primarylight-green' : 'bg-primaryblue'} text-white font-semibold text-xs rounded-lg h-7 px-3`}>
              Day Plan
            </Badge>
            <div className={`inline-flex h-[29px] items-center justify-center p-1 ${theme === 'dark' ? 'bg-[#282828]' : 'bg-gray-100'} rounded-lg border-[0.5px] border-solid ${theme === 'dark' ? 'border-[#d3f462]' : 'border-primaryblue'}`}>
              <span className={`font-semibold ${theme === 'dark' ? 'text-primarylight-green' : 'text-primaryblue'} text-xs whitespace-nowrap px-1.5`}>
                14 Activities
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full overflow-x-auto">
            {days.map((dayItem, index) => (
              <button
                key={index}
                onClick={() => onDayChange(dayItem.day)}
                className={`flex ${dayItem.month ? "w-[73px]" : "w-[46px]"
                  } h-11 items-center justify-center gap-2 px-2 py-1 ${theme === 'dark' ? 'bg-[#282828]' : 'bg-gray-100'} rounded-lg overflow-hidden transition-all duration-300 ${selectedDay === dayItem.day ? `border border-solid ${theme === 'dark' ? 'border-[#d3f462]' : 'border-primaryblue'}` : ""
                  }`}
              >
                {dayItem.month && (
                  <div
                    className={`flex w-7 h-11 items-center justify-center p-1 mt-[-4.00px] mb-[-4.00px] ml-[-4.00px] ${selectedDay === dayItem.day ? (theme === 'dark' ? "bg-primarylight-green" : "bg-primaryblue") : theme === 'dark' ? "bg-gray-600" : "bg-gray-200"
                      } rounded-[8px_0px_0px_8px] overflow-hidden`}
                  >
                    <div className="rotate-[-90deg] font-semibold text-backgrounddark text-xs whitespace-nowrap">
                      {dayItem.month}
                    </div>
                  </div>
                )}

                <div
                  className={`inline-flex flex-col items-${dayItem.month ? "start" : "center"
                    } justify-center gap-2 ${dayItem.month ? "mr-[-4.00px]" : "mx-[-1.50px]"}`}
                >
                  <div
                    className={`w-[33px] font-medium text-xs ${selectedDay === dayItem.day ? (theme === 'dark' ? 'text-textwhite' : 'text-black') : (theme === 'dark' ? 'text-gray-600' : 'text-black')} ${dayItem.month ? "" : "text-center"} mt-[-1.00px]`}
                  >
                    {dayItem.day}
                  </div>

                  <div
                    className={`w-[33px] font-semibold text-sm ${selectedDay === dayItem.day ? (theme === 'dark' ? 'text-textwhite' : 'text-black') : (theme === 'dark' ? 'text-gray-600' : 'text-black')} ${dayItem.month ? "" : "text-center"}`}
                  >
                    {dayItem.date}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};