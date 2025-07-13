import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";//bg-gradient-to-r from-[#0b0f2f] to-[#1d2b4f]
import Bubbles from "../components/Bubble";
// import "./Home3d";
import Home3d from "../components/Home3d";
import Button from "../components/Button";

const Header = () => {
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
    <header className="bg-[#00000f] h-[100vh] text-white relative overflow-hidden flex">
      <Navbar />

      {/* Background Bubble */}
      <div className="absolute inset-0 z-[10]">
        <Bubbles top="12vh" left="12vw" />
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
            <span className="text-[#8a47c5] ml-1.5">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </span>
          </h2>

          <p className="text-xl mb-8 text-gray-300">
            A passionate developer creating beautiful and functional web
            applications. Skilled in Flutter development, backend systems, and
            coding innovative solutions.
          </p>
          <Button />
        </div>
      </div>

      {/* Right Section */}
      <div className="right z-10 w-1/2 flex items-center justify-center">
        <Home3d />
      </div>
    </header>
  );
};

export default Header;
