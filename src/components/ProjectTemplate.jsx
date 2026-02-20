import React, { useEffect, useState, useRef } from "react";
import { XMarkIcon, PlayIcon, PauseIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

const getGradientBorder = (index, isDark) => {
  const darkGradients = [
    "bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500",
    "bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-500",
    "bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500",
    "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    "bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500",
    "bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500",
  ];
  const lightGradients = [
    "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
    "bg-gradient-to-br from-orange-500 via-pink-500 to-red-500",
    "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
    "bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500",
    "bg-gradient-to-br from-orange-500 via-red-500 to-pink-500",
    "bg-gradient-to-br from-pink-500 via-orange-500 to-red-500",
  ];
  const gradients = isDark ? darkGradients : lightGradients;
  return gradients[index % gradients.length];
};

const ProjectTemplate = ({
  title,
  description,
  techStack,
  images = [],
  videos = [],
  projectUrl = "",
  githubUrl = "",
  features = [],
  challenges = "",
  solution = "",
  outcomes = "",
  onClose,
}) => {
  const { isDark } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-md p-4 md:p-12 overflow-y-auto pt-16">
      <div className={`${isDark ? 'bg-[#00000f] text-gray-200 border-gray-800' : 'bg-white text-gray-800 border-orange-200'} w-full max-w-5xl min-h-[90vh] rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col border transition-colors duration-300`}>
        <button
          onClick={onClose}
          aria-label="Close project details"
          className={`absolute top-6 right-6 z-20 p-2 ${isDark ? 'bg-[#1f2937] hover:bg-[#374151] ring-gray-700' : 'bg-orange-100 hover:bg-orange-200 ring-orange-300'} rounded-full transition-colors duration-200 group ring-1`}
        >
          <XMarkIcon className={`w-6 h-6 ${isDark ? 'text-gray-300 group-hover:text-white' : 'text-orange-600 group-hover:text-orange-700'}`} />
        </button>
        <div className="flex-1 overflow-y-auto">
          <div className="w-[101%] -ml-3">
            <div className="relative overflow-hidden">
              {videos && videos.length > 0 ? (
                <div className="relative w-full">
                  <video
                    ref={videoRef}
                    className="w-full h-auto object-cover block"
                    preload="metadata"
                    loading="lazy"
                    autoPlay={true}
                    muted
                    loop
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={videos[0].src} type="video/mp4" />
                  </video>
                  <button
                    onClick={togglePlay}
                    className={`absolute bottom-6 right-6 z-20 p-2 ${isDark ? 'bg-[#1f2937] hover:bg-[#374151] ring-gray-700' : 'bg-orange-100 hover:bg-orange-200 ring-orange-300'} rounded-full transition-colors duration-200 group ring-1`}
                  >
                    {isPlaying ? (
                      <PauseIcon className={`w-6 h-6 ${isDark ? 'text-gray-300 group-hover:text-white' : 'text-orange-600 group-hover:text-orange-700'}`} />
                    ) : (
                      <PlayIcon className={`w-6 h-6 ${isDark ? 'text-gray-300 group-hover:text-white' : 'text-orange-600 group-hover:text-orange-700'}`} />
                    )}
                  </button>
                </div>
              ) : (
                images[1] && (
                  <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                )
              )}
            </div>
          </div>
          <div className={`flex pt-20 ${isDark ? 'bg-[#00000f]' : 'bg-[#efeae3]'}`}>
            {images && images.length > 0 && (
            <div className="w-full max-w-lg mx-auto mb-24">
              <div className="overflow-hidden">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  style={{ contentVisibility: "auto" }}
                />
              </div>
            </div>
          )}
            <div className="flex flex-col items-center pb-12 px-8 text-center max-w-4xl mx-auto">
            <h1 className={`text-5xl md:text-7xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 tracking-tight`}>
              {title}
            </h1>
            <p className={`text-xl md:text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-10 leading-relaxed max-w-2xl`}>
              {description}
            </p>
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 ${isDark ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/30' : 'bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/30'} text-white font-semibold rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1`}
              >
                Open live site
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-8 py-2 ${isDark ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/30' : 'bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/30'} text-white font-semibold rounded-lg transition-all duration-300 shadow-lg mb-4`}
              >
                Open Github
              </a>
            )}
          </div>
          
          </div>
          <div className={`${isDark ? 'bg-[#00000f]' : 'bg-[#efeae3]'} py-24 overflow-hidden transition-colors duration-300`}>
            <div className="max-w-5xl mx-auto">
              <h2 className={`text-4xl md:text-5xl font-bold text-center ${isDark ? 'text-white' : 'text-gray-900'} mb-20`}>
                Some of my favorite details
              </h2>
              <div className="space-y-32">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } gap-12 md:gap-24 items-center`}
                  >
                    <div className="flex-1 mx-8 md:mx-16">
                      <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                        {feature.title}
                      </h3>
                      <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        {feature.description}
                      </p>
                    </div>
                    <div className={`flex-1 w-full `}>
                      <div
                        className={`rounded-2xl overflow-hidden shadow-lg p-4 ${getGradientBorder(
                          index,
                          isDark
                        )} ${
                          index % 2 === 1
                            ? "md:rounded-l-none md:pl-0"
                            : "md:rounded-r-none md:pr-0"
                        }`}
                      >
                        <div
                          className={`${isDark ? 'bg-[#0b0f17]' : 'bg-white'} rounded-xl overflow-hidden ${
                            index % 2 === 1
                              ? "md:rounded-l-none"
                              : "md:rounded-r-none"
                          }`}
                        >
                          {images[index+1] ? (
                            <img
                              src={images[index+1].src}
                              alt={feature.title}
                              className="w-full h-auto"
                              loading="lazy"
                              decoding="async"
                              style={{ contentVisibility: "auto" }}
                            />
                          ) : (
                            <div className="aspect-video bg-[#1f2937] flex items-center justify-center text-gray-500">
                              <span className="text-lg">Feature Visual</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${isDark ? 'bg-[#00000f]' : 'bg-[#efeae3]'} py-12 px-6 transition-colors duration-300`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                  {title}{" "}
                  <span className={`${isDark ? 'text-gray-500' : 'text-gray-600'} font-normal`}>2024</span>
                </h2>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{techStack.join(" • ")}</p>
              </div>
              <div className="flex flex-col items-center">
                {projectUrl ? (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-8 py-2 ${isDark ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/30' : 'bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/30'} text-white font-semibold rounded-lg transition-all duration-300 shadow-lg mb-4`}
                  >
                    Open live site
                  </a>
                ) : (
                  <a
                    href="https://github.com/PankajKumar17?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-8 py-2 ${isDark ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/30' : 'bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/30'} text-white font-semibold rounded-lg transition-all duration-300 shadow-lg mb-4`}
                  >
                    Open Github
                  </a>
                )}
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'} mb-2`}>
                  Press{" "}
                  <kbd className={`px-2 py-1 ${isDark ? 'bg-[#1f2937] text-gray-300' : 'bg-orange-100 text-orange-700'} rounded font-sans`}>
                    esc
                  </kbd>{" "}
                  to close
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
