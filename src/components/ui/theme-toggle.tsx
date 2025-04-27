import React from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps): JSX.Element => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
      ) : (
        <Sun className="w-5 h-5 text-white dark:text-gray-800" />
      )}
    </button>
  );
};