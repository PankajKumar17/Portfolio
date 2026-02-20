import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const ExperienceCard = () => {
  const { isDark } = useTheme();
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "./resume.pdf"; 
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`group relative ${isDark ? 'bg-slate-800/50' : 'bg-white'} rounded-xl px-[2px] py-[2px] overflow-clip transition-colors duration-300`}>
      {/* Glow effect container */}
      <div className={`absolute -inset-0.5 ${isDark ? 'bg-purple-600' : 'bg-orange-600'} rounded-xl opacity-0 blur group-hover:opacity-75 transition duration-500 animate-spin-slow`}></div>

      {/* Main card content */}
      <div className={`relative rounded-xl ${isDark ? 'bg-slate-800' : 'bg-white border-2 border-orange-200'} px-8 py-8 text-center transition-colors duration-300`}>
        <div className={`text-8xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>2</div>
        <div className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
          <div>Months</div>
          <div>Experience</div>
          <div>Working</div>
        </div>
        <button
          className={`${isDark ? 'bg-purple-500 hover:bg-purple-600' : 'bg-orange-500 hover:bg-orange-600'} text-white px-8 py-3 rounded-lg font-semibold transition-colors`}
          onClick={
              handleDownload
          }
        >
          DOWNLOAD MY RESUME
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;
