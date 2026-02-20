import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Bubbles from "../components/Bubble";
import Home3d from "../components/Home3d";
import Lanyard from '../components/Lanyard';
import Button from "../components/Button";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { isDark } = useTheme();
  const roles = [
    "Flutter App Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Coder",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;

    if (!isDeleting && displayedText.length < roles[currentRole].length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(roles[currentRole].slice(0, displayedText.length + 1));
      }, 100);
    } else if (isDeleting && displayedText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(roles[currentRole].slice(0, displayedText.length - 1));
      }, 50);
    } else if (
      !isDeleting &&
      displayedText.length === roles[currentRole].length
    ) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentRole, roles]);

  return (
    <header className={`${isDark ? 'bg-[#00000f] text-white' : 'bg-[#efeae3] text-gray-900'} h-[100vh] relative overflow-hidden flex transition-colors duration-300`}>
      <Navbar />

      {/* Background Bubble */}
      <div className="absolute inset-0 z-[10]">
        <Bubbles top="12vh" left="12vw" />
      </div>

      {/* Fixed Gradient Shadow for ID Card */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-[500px] z-[5] pointer-events-none">
        <div 
          className="w-full h-full blur-3xl rounded-full opacity-60"
          style={{
            background: `radial-gradient(ellipse at center,${isDark ? 'rgba(138, 71, 197, 0.6)' : 'rgba(254, 51, 10, 0.6)'} 0%, ${isDark ? 'rgba(138, 71, 197, 0.4)' : 'rgba(254, 51, 10, 0.4)'} 30%, rgba(255, 152, 49, 0.2) 50%, transparent 70%)`
          }}
        ></div>
      </div>
      <div className="absolute right-1/4 top-4/5 -translate-y-1/2 w-80 h-[500px] z-[5] pointer-events-none">
        <div 
          className="w-full h-full blur-3xl rounded-full opacity-60"
          style={{
            background: `radial-gradient(ellipse at center,${isDark ? 'rgba(138, 71, 197, 0.6)' : 'rgba(254, 51, 10, 0.6)'} 0%, ${isDark ? 'rgba(138, 71, 197, 0.4)' : 'rgba(254, 51, 10, 0.4)'} 30%, rgba(255, 152, 49, 0.2) 50%, transparent 70%)`
          }}
        ></div>
      </div>
      <div className="absolute right-1/10 top-1/2 -translate-y-1/2 w-80 h-[500px] z-[5] pointer-events-none">
        <div 
          className="w-full h-full blur-3xl rounded-full opacity-60"
          style={{
            background: `radial-gradient(ellipse at center,${isDark ? 'rgba(138, 71, 197, 0.6)' : 'rgba(254, 51, 10, 0.6)'} 0%, ${isDark ? 'rgba(138, 71, 197, 0.4)' : 'rgba(254, 51, 10, 0.4)'} 30%, rgba(255, 152, 49, 0.2) 50%, transparent 70%)`
          }}
        ></div>
      </div>
      <div className="absolute right-1/10 top-4/5 -translate-y-1/2 w-80 h-[500px] z-[5] pointer-events-none">
        <div 
          className="w-full h-full blur-3xl rounded-full opacity-60"
          style={{
            background: `radial-gradient(ellipse at center,${isDark ? 'rgba(138, 71, 197, 0.6)' : 'rgba(254, 51, 10, 0.6)'} 0%, ${isDark ? 'rgba(138, 71, 197, 0.4)' : 'rgba(254, 51, 10, 0.4)'} 30%, rgba(255, 152, 49, 0.2) 50%, transparent 70%)`
          }}
        ></div>
      </div>

      {/* Left Section */}
      <div className="left z-10 w-1/2 flex flex-col items-center justify-center text-center px-38">
        <div className="flex flex-col items-start justify-center h-full text-start">
          <h2 className="text-4xl font-bold mb-4 self-start text-start">
            Hello, I'm
          </h2>
          <h1 className="text-6xl font-bold mb-4 self-start text-start">
            Pankaj Kumar
          </h1>
          <h2 className="text-2xl font-semibold mb-6 self-start text-start">
            I am a{" "}
            <span className={`${isDark ? 'text-[#8a47c5]' : 'text-[#fe330a]'} ml-1.5`}>
              {displayedText}
              <span className="blinking-cursor">|</span>
            </span>
          </h2>

          <p className={`text-xl mb-8 ${isDark ? 'text-gray-200' : 'text-gray-600'}`}>
            A passionate developer creating beautiful and functional web
            applications. Skilled in Flutter development, backend systems, and
            coding innovative solutions.
          </p>
          <Button />
        </div>
      </div>

      {/* Right Section */}
      <div className="right z-50 absolute w-[150vw] -right-1/2 flex justify-between overflow-visible">
        <Lanyard className="z-59 overflow-visible" position={[0, 0, 15]} gravity={[0, -40, 0]} />
      </div>
    </header>
  );
};

export default Header;



//1768*2654