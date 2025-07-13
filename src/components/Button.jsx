import React, { useState } from "react";

const Button = ({
  text = "View My Work",
  bgColor = "#8a47c5",
  hoverColor = "#ffffff",
  textColor = "#000000",
  hoverTextColor = "#000000",
  borderColor = "transparent",
  route = "projects",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const onclick = (e) => {
    e.preventDefault();
    if (route === "projects") {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Projects section not found");
      }
    }
  };

  return (
    <button
      className="relative overflow-hidden rounded-full border-2 group font-semibold text-lg cursor-pointer"
      style={{ backgroundColor: bgColor, borderColor: borderColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onclick}
    >
      <span
        className="relative z-10 block px-6 py-3 transition-all duration-300 ease-in-out"
        style={{
          color: isHovered ? hoverTextColor : textColor,
        }}
      >
        {text}
      </span>
      <div
        className="absolute left-0 top-full h-full w-full rounded-full transition-all duration-500 ease-in-out group-hover:top-0 group-hover:rounded-none z-0"
        style={{ backgroundColor: hoverColor }}
      />
    </button>
  );
};

export default Button;
