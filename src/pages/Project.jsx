import React from "react";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <div className="bg-[#00000f] text-white py-20 px-8 h-[140vh] w-full flex flex-col justify-center items-center">
      <h2 className="text-6xl font-semibold">A small selection</h2>
      <h2 className="text-6xl font-semibold">of my work</h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-8 p-6 mt-12">
        
        <div className="card1 w-132 h-84 rounded-2xl relative group">
          <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-blue-400 to-indigo-800 transition-opacity delay-400 duration-100 group-hover:opacity-0"></div>
          <div className="relative w-132 h-84 px-12 pt-12 z-10 hover:p-0 transition-all duration-400 delay-100 ease-in-out ">
            <ProjectCard src="images/flash_cards.png"/>
          </div>
        </div>
        
        <div className="card1 w-132 h-84 rounded-2xl relative group">
          <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-orange-600 to-yellow-400 transition-opacity delay-400 duration-100 group-hover:opacity-0"></div>
          <div className="relative w-132 h-84 px-12 pt-12 z-10 hover:p-0 transition-all duration-400 delay-100 ease-in-out ">
            <ProjectCard src="images/sniffi_image.png"/>
          </div>
        </div>
        
        <div className="card1 w-132 h-84 rounded-2xl relative group">
          <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 transition-opacity delay-400 duration-100 group-hover:opacity-0"></div>
          <div className="relative w-132 h-84 px-12 pt-12 z-10 hover:p-0 transition-all duration-400 delay-100 ease-in-out ">
            <ProjectCard src="images/skipq.png" />
          </div>
        </div>
        
        <div className="card1 w-132 h-84 rounded-2xl relative group">
          <div className="absolute rounded-2xl inset-0 bg-gradient-to-r from-slate-900 to-slate-600 transition-opacity delay-400 duration-100 group-hover:opacity-0"></div>
          <div className="relative w-132 h-84 px-12 pt-12 z-10 hover:p-0 transition-all duration-400 delay-100 ease-in-out ">
            <ProjectCard src="images/hostel_suvidha.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
