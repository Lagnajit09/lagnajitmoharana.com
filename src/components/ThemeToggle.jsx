import React from "react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`absolute top-4 right-4 p-2 rounded ${
        theme === "light" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
