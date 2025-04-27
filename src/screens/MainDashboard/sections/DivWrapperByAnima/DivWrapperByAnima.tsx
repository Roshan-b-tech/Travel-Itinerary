import { CheckCircleIcon, ClockIcon, StarIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

interface DivWrapperByAnimaProps {
  theme: "light" | "dark";
}

export const DivWrapperByAnima = ({ theme }: DivWrapperByAnimaProps): JSX.Element => {
  const hotelBookings = [
    {
      id: 1,
      name: "Shinagawa Prince Hotel",
      image: "/image-3.png",
      rating: "4.0",
      ratingText: "Very Good",
      checkIn: "26.01.2025, 11:15 pm",
      checkOut: "28.01.2025, 11:15 am",
      nights: "2 Nights",
      status: "Confirmed",
      statusColor: "secondarygreen",
    },
    {
      id: 2,
      name: "Mercure Tokyo Hotel",
      image: "/image-2.png",
      rating: "4.1",
      ratingText: "Very Good",
      checkIn: "28.01.2025, 6:00 pm",
      checkOut: "30.01.2025, 11:15 am",
      nights: "2 Nights",
      status: "Pending",
      statusColor: "secondaryred",
    },
    {
      id: 3,
      name: "Mercure Tokyo Hotel",
      image: "/image-3.png",
      rating: "4.1",
      ratingText: "Very Good",
      checkIn: "29.01.2025, 6:00 pm",
      checkOut: "30.01.2025, 11:15 am",
      nights: "2 Nights",
      status: "Pending",
      statusColor: "secondaryred",
    },
  ];

  return (
    <ScrollArea className="w-full">
      <div className="flex gap-4 py-2">
        {hotelBookings.map((hotel) => (
          <Card
            key={hotel.id}
            className={`w-[198px] h-[280px] ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primaryblue/20 cursor-pointer`}
          >
            <div className="relative w-full h-[124px] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${hotel.image})` }}
              >
                <Badge className="absolute bottom-2 left-2 flex items-center gap-0.5 bg-primaryblue text-textwhite rounded-sm py-0 px-0.5">
                  <StarIcon className="w-2.5 h-2.5" />
                  <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-[8px] leading-4">
                    {hotel.rating}
                  </span>
                  <span className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-[8px] leading-4">
                    {hotel.ratingText}
                  </span>
                </Badge>
              </div>
            </div>

            <CardContent className="p-0">
              <div className={`px-2 pt-2 ${theme === 'dark' ? 'bg-[#4d4d4d]' : 'bg-white'}`}>
                <h3 className={`[font-family:'Mont-SemiBold',Helvetica] font-semibold ${theme === 'dark' ? 'text-textwhite' : 'text-gray-900'} text-sm leading-[15px] group-hover:text-primaryblue transition-colors duration-300`}>
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1 mt-3">
                  <span className={`[font-family:'Mont-SemiBold',Helvetica] font-semibold ${theme === 'dark' ? 'text-textwhite' : 'text-gray-900'} text-xs leading-4`}>
                    Check in:
                  </span>
                  <span className={`[font-family:'Montserrat',Helvetica] font-normal ${theme === 'dark' ? 'text-textwhite' : 'text-gray-900'} text-xs leading-4`}>
                    {hotel.checkIn}
                  </span>
                </div>

                <div className="flex items-center gap-1 mt-1">
                  <span className={`[font-family:'Mont-SemiBold',Helvetica] font-semibold ${theme === 'dark' ? 'text-textwhite' : 'text-gray-900'} text-xs leading-4`}>
                    Check out:
                  </span>
                  <span className={`[font-family:'Montserrat',Helvetica] font-normal ${theme === 'dark' ? 'text-textwhite' : 'text-gray-900'} text-xs leading-4`}>
                    {hotel.checkOut}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <span className={`[font-family:'Mont-SemiBold',Helvetica] font-semibold ${theme === 'dark' ? 'text-textwhite' : 'text-gray-900'} text-xs leading-4`}>
                    {hotel.nights}
                  </span>

                  <div className="flex items-center gap-0.5">
                    {hotel.status === "Confirmed" ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5 text-secondarygreen transition-transform duration-300 group-hover:scale-110" />
                        <span
                          className={`[font-family:'Mont-SemiBold',Helvetica] font-semibold text-${hotel.statusColor} text-xs leading-4 transition-colors duration-300 group-hover:text-secondarygreen`}
                        >
                          {hotel.status}
                        </span>
                      </>
                    ) : (
                      <>
                        <ClockIcon className="w-6 h-6 text-secondaryred transition-transform duration-300 group-hover:scale-110" />
                        <span
                          className={`[font-family:'Mont-SemiBold',Helvetica] font-semibold text-${hotel.statusColor} text-xs leading-4 transition-colors duration-300 group-hover:text-secondaryred`}
                        >
                          {hotel.status}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
