import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ src="", alt="", label="", navigateTo = "/" }) => {
  const blobRef = useRef(null);
  const containerRef = useRef(null);
//   const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const blob = blobRef.current;
    const container = containerRef.current;

    if (!blob || !container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    blob.animate(
      [
        {
          transform: `translate(${x}px, ${y}px)`,
        },
      ],
      {
        duration: 100,
        fill: "forwards",
      }
    );

    blob.style.opacity = "1";

    // 3D tilt effect
    const rotateX = -(y / 20);
    const rotateY = x / 20;
    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const blob = blobRef.current;
    const container = containerRef.current;

    if (blob) blob.style.opacity = "0";
    if (container) container.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  const handleClick = () => {
    // navigate(navigateTo);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-black w-full h-full rounded-t-2xl flex flex-col gap-2 items-center justify-center overflow-hidden shadow-lg transition-transform duration-100 hover:shadow-slate-800/30 cursor-none hover:rounded-2xl "
    >
      {/* White Glow Blob */}
      <div
        ref={blobRef}
        className="absolute top-[30%] left-1/2 w-[120px] h-[30%] -translate-x-1/2 rounded-full bg-purple-400 opacity-0 blur-[60px] transition-opacity duration-300 pointer-events-none z-20"
      ></div>
      <img
        src={src}
        alt={alt}
        onClick={handleClick}
        className="w-full object-cover h-full z-10 transition-transform duration-300 hover:scale-105"
      />

      {/* Label
      <p className="text-lg text-slate-200 z-10">{label}</p> */}
    </div>
  );
};

export default ProjectCard;
