import React, { useRef } from "react";

const ExperienceCard = () => {
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
    <div className="group relative bg-slate-800/50 rounded-xl px-[2px] py-[2px] overflow-clip">
      {/* Glow effect container */}
      <div className="absolute -inset-0.5 bg-purple-600 rounded-xl opacity-0 blur group-hover:opacity-75 transition duration-500 animate-spin-slow"></div>

      {/* Main card content */}
      <div className="relative rounded-xl bg-slate-800 px-8 py-8 text-center">
        <div className="text-8xl font-bold text-white mb-4">2</div>
        <div className="text-xl text-gray-300 mb-8">
          <div>Months</div>
          <div>Experience</div>
          <div>Working</div>
        </div>
        <button
          className="bg-purple-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 transition-colors"
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
