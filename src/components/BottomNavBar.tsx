import React from "react";
import { Home, Search, Plus, Heart, User } from "lucide-react";

interface BottomNavBarProps {
    active?: string;
    theme: "light" | "dark";
    onNavClick?: (nav: string) => void;
}

export const BottomNavBar = ({ active = "home", theme, onNavClick }: BottomNavBarProps) => (
    <nav className={`fixed bottom-0 left-0 w-full z-50 border-t border-gray-200 ${theme === 'dark' ? 'bg-black' : 'bg-[#fcfaf6]'}`}>
        <div className="flex justify-around items-center h-16">
            <span
                className={`rounded-full p-3 ${active === "home" ? (theme === 'dark' ? 'bg-yellow-900' : 'bg-[#e3e7fd]') : ""}`}
                onClick={() => onNavClick && onNavClick("home")}
                style={{ cursor: "pointer" }}
            >
                <Home className={`w-6 h-6 ${active === "home" ? (theme === 'dark' ? 'text-yellow-400' : 'text-primaryblue') : 'text-gray-500'}`} />
            </span>
            <span onClick={() => onNavClick && onNavClick("search")} style={{ cursor: "pointer" }}>
                <Search className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
            </span>
            <span
                className={`rounded-full p-3 ${active === "plus" ? (theme === 'dark' ? 'bg-yellow-900' : 'bg-[#e3e7fd]') : ""}`}
                onClick={() => onNavClick && onNavClick("plus")}
                style={{ cursor: "pointer" }}
            >
                <Plus className={`w-6 h-6 ${theme === 'dark' ? 'text-yellow-400' : 'text-primaryblue'}`} />
            </span>
            <span onClick={() => onNavClick && onNavClick("heart")} style={{ cursor: "pointer" }}>
                <Heart className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
            </span>
            <span onClick={() => onNavClick && onNavClick("user")} style={{ cursor: "pointer" }}>
                <User className={`w-6 h-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
            </span>
        </div>
    </nav>
); 