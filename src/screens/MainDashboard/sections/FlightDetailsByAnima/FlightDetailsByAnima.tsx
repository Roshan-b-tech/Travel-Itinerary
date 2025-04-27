import { ArrowRightIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

interface FlightDetailsByAnimaProps {
  theme: "light" | "dark";
}

const FlightDetailsModal = ({ open, onClose, flightData, theme }: any) => {
  if (!open) return null;
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white bg-[url(/plane.png)] bg-center bg-cover bg-no-repeat'}`}>
      <div className={`relative w-full max-w-md sm:max-w-sm mx-auto p-4 sm:p-6 rounded-2xl shadow-xl border ${theme === 'dark' ? 'border-gray-200 bg-backgrounddark' : 'border-primaryblue bg-white'} overflow-y-auto max-h-[90vh]`}>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 z-10">
          <X className="w-5 h-5 text-gray-900" />
        </button>
        <h2 className={`text-2xl font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Air India AI 307</h2>
        <div className={`mb-2 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{flightData.date}, {flightData.time}</div>
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="font-semibold">{flightData.origin.city}</span>
          <ArrowRightIcon className="w-6 h-6 text-primaryblue" />
          <span className="font-semibold">{flightData.destination.city}</span>
        </div>
        <div className={`rounded-xl p-4 mb-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
          <div className="font-semibold mb-2">Seat Details</div>
          <div>Seat: 12A</div>
          <div>Class: Economy</div>
          <div>Gate: 22</div>
        </div>
      </div>
    </div>
  );
};

export const FlightDetailsByAnima = ({ theme }: FlightDetailsByAnimaProps): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const flightData = {
    date: "26.01.2025",
    time: "10:50 am",
    origin: {
      code: "DEL",
      city: "Delhi, India",
    },
    destination: {
      code: "NRT",
      city: "Narita, Tokyo",
    },
  };

  return (
    <>
      <Card className="w-full h-[124px] bg-primaryblue rounded-2xl overflow-hidden">
        <CardContent className="p-2 relative h-full">
          <div className="w-full h-28 bg-secondaryblue rounded-xl relative">
            <img
              className="absolute w-[120px] h-[124px] top-0 right-0 object-cover transform scale-x-[-1]"
              alt="Plane"
              src="/plane.png"
            />

            <div
              className="absolute top-2.5 right-4 [font-family:'Mont-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-4 underline cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              See all
            </div>

            <div className="flex flex-col p-2.5">
              <div className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-6">
                Flight Details
              </div>

              <div className="font-body-2 font-[number:var(--body-2-font-weight)] text-white text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]">
                {flightData.date}, {flightData.time}
              </div>
            </div>

            <div className="absolute bottom-4 left-3 flex items-center">
              <div className="flex flex-col">
                <div className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4">
                  {flightData.origin.code}
                </div>
                <div className="font-body-3 font-[number:var(--body-3-font-weight)] text-white text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)] [font-style:var(--body-3-font-style)]">
                  {flightData.origin.city}
                </div>
              </div>

              <ArrowRightIcon className="mx-2 w-[18px] h-3.5 text-white" />

              <div className="flex flex-col">
                <div className="[font-family:'Mont-SemiBold',Helvetica] font-semibold text-white text-base tracking-[0] leading-4">
                  {flightData.destination.code}
                </div>
                <div className="font-body-3 font-[number:var(--body-3-font-weight)] text-white text-[length:var(--body-3-font-size)] tracking-[var(--body-3-letter-spacing)] leading-[var(--body-3-line-height)] [font-style:var(--body-3-font-style)]">
                  {flightData.destination.city}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <FlightDetailsModal open={showModal} onClose={() => setShowModal(false)} flightData={flightData} theme={theme} />
    </>
  );
};