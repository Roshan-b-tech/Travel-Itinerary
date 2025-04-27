import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";

interface OnboardingProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export const Onboarding = ({ theme, onToggleTheme }: OnboardingProps): JSX.Element => {
  const navigate = useNavigate();
  const [selectedTravelGroup, setSelectedTravelGroup] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [isDurationOpen, setIsDurationOpen] = useState<boolean>(false);

  const durationOptions = [
    "1-3 Days",
    "4-7 Days",
    "8-14 Days",
    "15-30 Days",
    "30+ Days"
  ];

  return (
    <div className={`min-h-screen p-4 ${theme === 'light' ? 'bg-white' : 'bg-backgrounddark'}`}>
      {/* Main content */}
      <div className="mt-12 max-w-3xl mx-auto text-center lg:text-left">
        <h1 className={`text-3xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
          Plan Your Journey, Your Way!
        </h1>
        <p className={`text-lg mb-12 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          Let's create your personalised travel experience
        </p>

        {/* Destination Input */}
        <div className="mb-8 text-left">
          <label className={`text-xl mb-4 block ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Where would you like to go?
          </label>
          <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-[#282828]'} rounded-lg p-4 flex items-center gap-3`}>
            <MapPin className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
            <input
              type="text"
              placeholder="Enter Destination"
              className={`bg-transparent w-full outline-none ${theme === 'light' ? 'text-gray-900 placeholder:text-gray-500' : 'text-white placeholder:text-gray-500'}`}
            />
          </div>
        </div>

        {/* Duration Selector */}
        <div className="mb-8 relative">
          <label className={`text-xl mb-4 block ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            How long will you stay?
          </label>
          <button
            onClick={() => setIsDurationOpen(!isDurationOpen)}
            className={`w-full ${theme === 'light' ? 'bg-gray-100' : 'bg-[#282828]'} rounded-lg p-4 flex items-center justify-between`}
          >
            <div className="flex items-center gap-3">
              <Calendar className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`} />
              <span className={`${selectedDuration ? (theme === 'light' ? 'text-gray-900' : 'text-white') : (theme === 'light' ? 'text-gray-600' : 'text-gray-500')}`}>
                {selectedDuration || "Select Duration"}
              </span>
            </div>
            <span className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-500'} transform transition-transform duration-200 ${isDurationOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {/* Dropdown Menu */}
          {isDurationOpen && (
            <div className={`absolute z-10 w-full mt-2 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#282828]'} rounded-lg shadow-lg overflow-hidden`}>
              {durationOptions.map((duration) => (
                <button
                  key={duration}
                  onClick={() => {
                    setSelectedDuration(duration);
                    setIsDurationOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:${theme === 'light' ? 'bg-gray-200' : 'bg-[#383838]'} transition-colors ${selectedDuration === duration ? 'text-primaryblue' : (theme === 'light' ? 'text-gray-900' : 'text-white')}`}
                >
                  {duration}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Travel Group Selection */}
        <div>
          <label className={`text-xl mb-4 block ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            Who are you traveling with?
          </label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "solo", label: "Solo", icon: "👤" },
              { id: "couple", label: "Couple", icon: "👫" },
              { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦" },
              { id: "friends", label: "Friends", icon: "👥" },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedTravelGroup(option.id)}
                className={`p-4 rounded-lg flex items-center justify-center gap-2 ${selectedTravelGroup === option.id
                  ? "bg-primaryblue text-white"
                  : theme === 'light'
                    ? "bg-gray-100 text-gray-600"
                    : "bg-[#282828] text-gray-400"
                  }`}
              >
                <span>{option.icon}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-primaryblue text-white rounded-lg py-4 mt-12 font-semibold hover:bg-secondaryblue transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};