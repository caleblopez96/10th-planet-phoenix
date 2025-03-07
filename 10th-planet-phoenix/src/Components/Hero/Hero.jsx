import { useState, useEffect } from "react";
import desktop1 from "../../assets/HERO LG/MCC_8853(2).jpg";
import desktop2 from "../../assets/HERO LG/MCC_8792.jpg";
import desktop3 from "../../assets/HERO LG/20220112_200025.jpg";
import desktop4 from "../../assets/HERO LG/received_10100266450098952.jpeg";

// mobile
import mobile1 from "../../assets/HERO SM/20211025_200740.jpg";
import mobile2 from "../../assets/HERO SM/20220122_113831_edited.jpg";
import mobile3 from "../../assets/HERO SM/20220627_185141.jpg";
import mobile4 from "../../assets/HERO SM/IMG_20210703_121346.jpg";

const desktopImages = [desktop1, desktop2, desktop3, desktop4];
const mobileImages = [mobile1, mobile2, mobile3, mobile4];

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Choose the correct image array based on screen size
  const currentImages = isMobile ? mobileImages : desktopImages;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-white text-center transition-all duration-500 overflow-hidden">
      <img
        src={currentImages[imageIndex]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
      />
      <div className="p-8 rounded-lg z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold text-pretty">
          10TH PLANET JIU-JITSU PHOENIX
        </h1>
        <p className="text-lg md:text-xl mt-4">
          LEARN THIS UNIQUE STYLE OF SUBMISSION GRAPPLING
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
