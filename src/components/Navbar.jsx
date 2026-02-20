import React from "react";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="absolute z-[100] top-0 left-0 w-full py-4">
      <div className="container mx-auto flex justify-between items-center px-24">
        <div className="">
          <img src={isDark?`images/Logo.png`:'images/LightLogo.png'} alt="" className="w-32"/>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <a
              href="#about"
              className={`relative ${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-orange-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:rounded-2xl ${isDark ? 'after:bg-gray-300' : 'after:bg-orange-500'} after:transition-all after:duration-300 hover:after:w-full`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`relative ${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-orange-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:rounded-2xl ${isDark ? 'after:bg-gray-300' : 'after:bg-orange-500'} after:transition-all after:duration-300 hover:after:w-full`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`relative ${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-orange-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:rounded-2xl ${isDark ? 'after:bg-gray-300' : 'after:bg-orange-500'} after:transition-all after:duration-300 hover:after:w-full`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`relative ${isDark ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-orange-600'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:rounded-2xl ${isDark ? 'after:bg-gray-300' : 'after:bg-orange-500'} after:transition-all after:duration-300 hover:after:w-full`}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <Button
            text="Download CV"
            hoverColor={isDark ? "#ffffff" : "#ff6b35"}
            bgColor="transparent"
            textColor={isDark ? "#ffffff" : "#ff6b35"}
            hoverTextColor={isDark ? "#000000" : "#ffffff"}
            borderColor={isDark ? "#ffffff" : "#ff6b35"}
            route="cv"
          />
          <button
            onClick={toggleTheme}
            className={`relative w-[72px] h-9 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-r from-gray-800 to-gray-900 shadow-inner' 
                : 'bg-gradient-to-r from-blue-200 to-blue-300 shadow-md'
            }`}
            aria-label="Toggle theme"
          >
            <div
              className={`absolute top-1 ${
                isDark ? 'left-1' : 'left-[38px]'
              } w-7 h-7 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center`}
            >
              {isDark ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-gray-700" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-yellow-500" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm0-8c-1.65,0-3,1.35-3,3s1.35,3,3,3,3-1.35,3-3-1.35-3-3-3Z"/>
                  <path d="M12,7c-.55,0-1-.45-1-1V3c0-.55.45-1,1-1s1,.45,1,1v3c0,.55-.45,1-1,1Z"/>
                  <path d="M12,22c-.55,0-1-.45-1-1v-3c0-.55.45-1,1-1s1,.45,1,1v3c0,.55-.45,1-1,1Z"/>
                  <path d="M21,13h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1s-.45,1-1,1Z"/>
                  <path d="M6,13h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1s-.45,1-1,1Z"/>
                  <path d="M18.36,7.05c-.26,0-.51-.1-.71-.29-.39-.39-.39-1.02,0-1.41l2.12-2.12c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-2.12,2.12c-.2.2-.45.29-.71.29Z"/>
                  <path d="M3.51,21.9c-.26,0-.51-.1-.71-.29-.39-.39-.39-1.02,0-1.41l2.12-2.12c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-2.12,2.12c-.2.2-.45.29-.71.29Z"/>
                  <path d="M20.49,21.9c-.26,0-.51-.1-.71-.29l-2.12-2.12c-.39-.39-.39-1.02,0-1.41s1.02-.39,1.41,0l2.12,2.12c.39.39.39,1.02,0,1.41-.2.2-.45.29-.71.29Z"/>
                  <path d="M5.64,7.05c-.26,0-.51-.1-.71-.29l-2.12-2.12c-.39-.39-.39-1.02,0-1.41s1.02-.39,1.41,0l2.12,2.12c.39.39.39,1.02,0,1.41-.2.2-.45.29-.71.29Z"/>
                </svg>
              )}
            </div>
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
