import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Bubbles = ({ top = '25%', left = '0%', width = '30vw', height = '50vh' }) => {
  const { isDark } = useTheme();
  const backgroundColor = isDark ? 'rgba(30,6,66,1)' : 'rgba(254, 51, 10, 0.34)';
  
  return (
    <div className="relative z-0 w-full h-screen overflow-hidden">
      <style>{`
        @keyframes bubble {
          0% {
            transform: skew(0deg);
          }
          50% {
            transform: translate(-20%, 20%) skew(15deg);
          }
          100% {
            transform: translate(0%, 0%) skew(-10deg);
          }
        }
        
        .shape1 {
          filter: blur(40px);
          animation: bubble 6s infinite alternate linear;
        }
      `}</style>
      
      <div className="shapes z-0 w-full h-full">
        <div 
          className="shape1 z-0 rounded-full"
          style={{
            position: 'absolute',
            top: top,
            left: left,
            width: width,
            height: height,
            background: `radial-gradient(circle, ${backgroundColor} 50%, rgba(0,0,0,0) 100%)`
          }}
        />
      </div>
    </div>
  );
};

export default Bubbles;