import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainDashboard } from "./screens/MainDashboard/MainDashboard";
import { Onboarding } from "./screens/Onboarding/Onboarding";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding theme={theme} onToggleTheme={toggleTheme} />} />
        <Route path="/dashboard" element={<MainDashboard theme={theme} onToggleTheme={toggleTheme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;