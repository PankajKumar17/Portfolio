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
                  <button
                    onClick={() => videoRef.current && videoRef.current.requestFullscreen()}
                    className={`absolute bottom-6 left-6 z-20 p-2 md:hidden ${isDark ? 'bg-[#1f2937] hover:bg-[#374151] ring-gray-700' : 'bg-orange-100 hover:bg-orange-200 ring-orange-300'} rounded-full transition-colors duration-200 ring-1`}
                  >
                    <svg className={`w-6 h-6 ${isDark ? 'text-gray-300' : 'text-orange-600'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2M16 4h2a2 2 0 012 2v2M16 20h2a2 2 0 002-2v-2" />
                    </svg>
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
            <div className="hidden md:block w-full max-w-lg mx-auto mb-24">
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
          <div className={`flex flex-col items-center pb-12 px-8 text-center max-w-4xl mx-auto`}>
            <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}
              style={{ fontFamily: 'Syne, sans-serif' }}>
              {title}
            </h1>
            <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed max-w-2xl`}
              style={{ fontFamily: 'Inter, sans-serif' }}>
              {description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {techStack.map((tech, i) => (
                <span key={i} className={`px-3 py-1 text-sm font-medium rounded-full border ${isDark ? 'border-purple-500/40 text-purple-300 bg-purple-500/10' : 'border-orange-400/40 text-orange-600 bg-orange-50'}`}
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  {tech}
                </span>
              ))}
            </div>

            {projectUrl && (
              <a href={projectUrl} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-3 ${isDark ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/30' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/30'} text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 mb-3`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                Live Site
              </a>
            )}
            {githubUrl && !projectUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-8 py-3 border-2 ${isDark ? 'border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300' : 'border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600'} font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"/></svg>
                View on GitHub
              </a>
            )}
          </div>
          
          </div>
          <div className={`${isDark ? 'bg-[#00000f]' : 'bg-[#efeae3]'} py-24 overflow-hidden transition-colors duration-300`}>
            <div className="max-w-5xl mx-auto">
              <h2 className={`text-4xl md:text-5xl font-extrabold text-center ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}
                style={{ fontFamily: 'Syne, sans-serif' }}>
                Some of my favorite details
              </h2>
              <p className={`text-center text-base mb-20 ${isDark ? 'text-gray-500' : 'text-gray-500'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                Key features that make this project stand out
              </p>
              <div className="space-y-32">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } gap-12 md:gap-24 items-center`}
                  >
                    <div className="flex-1 mx-8 md:mx-16">
                      <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}
                        style={{ fontFamily: 'Syne, sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className={`text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}
                        style={{ fontFamily: 'Inter, sans-serif' }}>
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
