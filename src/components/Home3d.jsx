import { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Element() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[42vh] min-h-[280px] md:h-[70vh] lg:h-screen mt-4 md:mt-12"
    >
      <div className="absolute bottom-2 right-2 box h-12 w-40 bg-[#00000f] hidden sm:block"></div>
      {isVisible && (
        <Spline scene="https://prod.spline.design/hnJmx-YYvgB0KIvD/scene.splinecode" />
      )}
    </div>
  );
}
