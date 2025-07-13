import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="absolute z-20 top-0 left-0 w-full py-4">
      <div className="container mx-auto flex justify-between items-center px-24">
        <div className="">
          <img src="images/Logo.png" alt="" />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="relative text-gray-300 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:rounded-2xl after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="relative text-gray-300 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:rounded-2xl after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative text-gray-300 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:rounded-2xl after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative text-gray-300 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:rounded-2xl after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
        <Button
          text="Download CV"
          hoverColor="#ffffff"
          bgColor="transparent"
          textColor="#ffffff"
          hoverTextColor="#000000"
          borderColor="#ffffff"
          route="cv"
        />
      </div>
    </nav>
  );
};

export default Navbar;
