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
      setImageIndex((prevIndex) => (prevIndex + 1) % 4); // Using 4 since both arrays have the same length
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentImages = isMobile ? mobileImages : desktopImages;

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white text-center transition-all duration-500 overflow-hidden"
      style={{ marginTop: "0", paddingTop: "4rem" }}
    >
      <div className="w-full h-full z-0 overflow-hidden pt-16 absolute inset-0 bg-black bg-opacity-50">
        <img
          src={currentImages[imageIndex]}
          alt="Background"
          className="w-full h-full object-cover opacity-70"
          style={{ objectPosition: "center 45%" }}
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="p-8 rounded-lg z-10 relative max-w-4xl pt-24">
        <h1 className="text-4xl md:text-6xl font-bold text-pretty drop-shadow-2xl lg:leading-20 md:leading-15 sm:leading-10">
          10TH PLANET JIU-JITSU PHOENIX
        </h1>
        <p className="text-lg md:text-xl mt-4 drop-shadow-2xl">
          LEARN THIS UNIQUE STYLE OF SUBMISSION GRAPPLING
        </p>

        <div className="flex justify-center gap-4 mt-6 sm:mt-4">
          <button className="px-6 py-3 sm:px-4 sm:py-2 text-base sm:text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors shadow-md">
            Get Started
          </button>
          <button className="px-6 py-3 sm:px-4 sm:py-2 text-base sm:text-sm bg-gray-800 hover:bg-gray-400 text-gray-300 rounded-md transition-colors shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
