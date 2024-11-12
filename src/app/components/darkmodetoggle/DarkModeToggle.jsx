"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
export default function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      onClick={toggleTheme}
      className=" flex border-2 p-1 justify-between align-center rounded-full border-green-600 relative"
    >
      <div className="icon">☀️</div>
      <div className="icon">🌙</div>
      <div
        className={
          theme === "dark"
            ? "switcher bg-black w-6 h-6 rounded-full cursor-pointer absolute left-1 duration-500 "
            : "switcher bg-black w-6 h-6 rounded-full cursor-pointer absolute right-1 duration-500 "
        }
      ></div>
    </div>
  );
}
