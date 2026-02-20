import React, { useState } from 'react';
import Button from '../components/Button';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className={`relative min-h-screen ${isDark ? 'bg-[#00000f] text-white' : 'bg-[#efeae3] text-gray-900'} flex items-center justify-center px-4 transition-colors duration-300`}>
      {/* Floating Images */}
       <img
        src="images/terrier.jpeg"
        alt="floating1"
        className="absolute h-32 top-10 left-[20vw] rounded-xl shadow-xl rotate-[-12deg] animate-floating1 cursor-pointer hover:scale-105 transition-transform"
        loading="lazy"
        decoding="async"
        onClick={() => openImage("images/terrier.jpeg")}
      />
      <img
        src="images/pic1.jpeg"
        alt="floating2"
        className="absolute bottom-[12vh] left-[20vw] w-48 rounded-xl shadow-xl -rotate-[-6deg] animate-floating2 cursor-pointer hover:scale-105 transition-transform"
        loading="lazy"
        decoding="async"
        onClick={() => openImage("images/pic1.jpeg")}
      />
      <img
        src="images/pic3.jpg"
        alt="floating3"
        className="absolute top-36 right-[12vw] w-32 rounded-xl shadow-xl rotate-[5deg] animate-floating3 cursor-pointer hover:scale-105 transition-transform"
        loading="lazy"
        decoding="async"
        onClick={() => openImage("images/pic3.jpg")}
      />

      <div className="max-w-3xl text-center">
        <h2 className={`text-5xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'} mb-12 tracking-wide`}>WHO AM I ?</h2>
        <p className="text-lg mb-4">
          I'm a passionate full-stack web developer using
 React, the MERN stack, and Next.js, with a strong programming foundation in C++, Python, and Flutter.
        </p>
        <p className="text-lg mb-8">
Driven by curiosity, I actively practice competitive programming and explore the intersections of AI/ML 
   and cybersecurity to build innovative and impactful digital solutions.
        </p>
        <p className="text-lg mb-8">
          Additionally, I like to play games and watch thriller movies and series in my leisure time which is kinda fun and relaxing!
        </p>
          <Button />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={closeImage}
        >
          <div className="relative max-w-5xl max-h-[90vh] p-4">
            <button
              className="absolute -top-2 -right-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg z-10"
              onClick={closeImage}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
