import React from 'react';
import Button from '../components/Button'; 

const About = () => {
  return (
    <section className="relative min-h-screen bg-[#00000f] text-white flex items-center justify-center px-4">
      {/* Floating Images */}
       <img
        src="images/pic1.jpg"
        alt="floating1"
        className="absolute h-32 top-10 left-[20vw] rounded-xl shadow-xl rotate-[-12deg] animate-floating1"
      />
      <img
        src="images/pic2.jpg"
        alt="floating2"
        className="absolute bottom-[12vh] left-[20vw] w-48 rounded-xl shadow-xl -rotate-[-6deg] animate-floating2"
      />
      <img
        src="images/pic3.jpg"
        alt="floating3"
        className="absolute top-36 right-[12vw] w-32 rounded-xl shadow-xl rotate-[5deg] animate-floating3"
      />

      <div className="max-w-3xl text-center">
        <h2 className="text-5xl font-extrabold text-white mb-12 tracking-wide">WHO AM I ?</h2>
        <p className="text-lg mb-4">
          I am a full-stack website developer specialized in ReactJS. Plus, I also know some WordPress front-end development with Elementor and WooCommerce.
        </p>
        <p className="text-lg mb-4">
          Programming is my passion, that's the reason I am working at the time of my academic career.
        </p>
        <p className="text-lg mb-8">
          Additionally, I like to play PC games and read story-type books in my leisure time which is kinda fun and relaxing!
        </p>
        {/* <button className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition">
          SHOW MY PROJECTS
        </button> */}
                  {/* <button className="relative overflow-hidden text-black font-semibold px-6 py-3 rounded-full shadow-lg bg-purple-400 group text-lg">
            <span className="relative z-10 block text-black transition-all duration-300 ease-in-out group-hover:text-white">
              View My Work
            </span>
            <div className="absolute left-0 top-full h-full w-full text-white font-semibold px-6 py-3 rounded-full shadow-lg bg-purple-700 transition-all duration-500 ease-in-out group-hover:top-0 group-hover:rounded-none z-0" />
          </button> */}
          <Button hoverColor='#c17aff' />
      </div>
    </section>
  );
};

export default About;
