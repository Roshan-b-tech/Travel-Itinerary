import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { X } from "lucide-react";

interface Activity {
  id: number;
  title: string;
  image: string;
  description: string;
  time: string;
  location: string;
}

interface DetailPaneProps {
  activity: Activity | null;
  onClose: () => void;
  theme: "light" | "dark";
}

export const DetailPane = ({ activity, onClose, theme }: DetailPaneProps): JSX.Element | null => {
  if (!activity) return null;

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-[400px] ${theme === 'light' ? 'bg-gray-100' : 'bg-backgrounddark'} border-l ${theme === 'light' ? 'border-primaryblue' : 'border-[#d3f462]'} transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}>
      <div className={`sticky top-0 z-10 ${theme === 'light' ? 'bg-gray-100' : 'bg-backgrounddark'} p-4 flex justify-between items-center border-b ${theme === 'light' ? 'border-primaryblue' : 'border-[#d3f462]'}`}>
        <h2 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-xl font-semibold`}>Activity Details</h2>
        <button
          onClick={onClose}
          className={`p-2 hover:${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'} rounded-full transition-colors`}
        >
          <X className={`w-6 h-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`} />
        </button>
      </div>

      <div className="p-4">
        <Card className={`overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-backgrounddark'}`}>
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-[200px] object-cover"
          />
          <CardContent className="p-4">
            <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-lg font-semibold mb-2`}>{activity.title}</h3>
            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm mb-4`}>{activity.description}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-sm font-semibold`}>Time:</span>
                <span className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm`}>{activity.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-sm font-semibold`}>Location:</span>
                <span className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-sm`}>{activity.location}</span>
              </div>
            </div>

            <button
              className={`w-full mt-6 ${theme === 'light' ? 'bg-primaryblue' : 'bg-primaryblue'} text-white rounded-lg py-3 font-semibold hover:bg-secondaryblue transition-colors`}
              onClick={() => {
                // Here you would typically handle booking or adding to itinerary
                console.log("Book activity:", activity.title);
              }}
            >
              Add to Itinerary
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};