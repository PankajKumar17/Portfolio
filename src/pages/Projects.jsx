import React from "react";

const Projects = () => {
  return (
    <section className="bg-[#00000f] text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="left flex w-[28vw] flex-col">
            <h2 className="text-6xl font-semibold leading-tight mb-12">
              THE WORKS CLOSEST TO MY HEART
            </h2>
            <button className="bg-[#8a47c5] w-[80%] text-black w- px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors">
              SHOW MY PROJECTS
            </button>
          </div>

          <div className="right flex gap-4">
            <div className="relative rounded-2xl overflow-hidden w-64 h-114 shadow-2xlr cursor-pointer duration-500 hover:w-64">
              <img src="images/sniffi_image.png" alt="" className="z-10 w-64 h-114 object-cover" />
              <div className="text-center z-20 absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <p className="text-black text-xl font-bold">Internship</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden w-34 h-114 shadow-2xlr cursor-pointer duration-500 hover:w-64">
              <img src="images/flash_cards.jpg" alt="" className="z-10 w-64 h-114 object-cover" />
              <div className="text-center z-20 absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <p className="text-black text-xl font-bold">PBL</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden w-34 h-114 shadow-2xlr cursor-pointer duration-500 hover:w-64">
              <img src="images/hostel_suvidha.png" alt="" className="z-10 w-64 h-114 object-cover" />
              <div className="text-center z-20 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <p className="text-white text-xl font-bold">Initiative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
