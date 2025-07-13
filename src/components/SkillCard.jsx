import React, { useRef } from "react";

const SkillCard = ({ src, alt, label }) => {
  const blobRef = useRef(null);
  const containerRef = useRef(null);

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
  };

  const handleMouseLeave = () => {
    const blob = blobRef.current;
    if (blob) {
      blob.style.opacity = "0";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-40 h-40 bg-slate-800/50 rounded-lg flex flex-col gap-2 items-center justify-center border border-slate-700 overflow-hidden"
    >
      <div
        ref={blobRef}
        className="absolute top-0 left-1/2 w-[250px] h-4/5 -translate-x-1/2 rounded-full bg-purple-500 opacity-0 blur-[40px] transition-opacity duration-300 pointer-events-none z-0"
      ></div>

      <img src={src} alt={alt} className="mx-auto w-16 h-16 z-10" />
      <p className="text-lg text-slate-300 z-10">{label}</p>
    </div>
  );
};

export default SkillCard;
