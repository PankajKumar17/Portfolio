import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="w-screen h-screen relative mt-24">
      <div className="absolute bottom-2 right-2 box h-12 w-40 bg-[#00000f]"></div>
      <Spline
        scene="https://prod.spline.design/1DH-ItslieoEYz0y/scene.splinecode"
      />
    </div>
  );
}
