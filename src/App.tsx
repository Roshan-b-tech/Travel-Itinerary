import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { MainDashboard } from "./screens/MainDashboard/MainDashboard";
import { Onboarding } from "./screens/Onboarding/Onboarding";
import FlightLoader from "./components/FlightLoader";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Optionally, you can set a minimum loader time
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2000);
  // }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  if (loading) {
    return <FlightLoader onComplete={() => setLoading(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/dashboard" element={<MainDashboard theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;