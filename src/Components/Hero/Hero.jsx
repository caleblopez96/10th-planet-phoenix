import { useState, useEffect } from "react";
import desktop1 from "../../assets/HERO LG/MCC_8853(2).jpg";
import desktop2 from "../../assets/HERO LG/MCC_8792.jpg";
import desktop3 from "../../assets/HERO LG/20220112_200025.jpg";
import desktop4 from "../../assets/HERO LG/received_10100266450098952.jpeg";
import mobile1 from "../../assets/HERO SM/20211025_200740.jpg";
import mobile2 from "../../assets/HERO SM/20220122_113831_edited.jpg";
import mobile3 from "../../assets/HERO SM/20220627_185141.jpg";
import mobile4 from "../../assets/HERO SM/IMG_20210703_121346.jpg";
import Button from "../Buttons/Button";

const desktopImages = [desktop1, desktop2, desktop3, desktop4];
const mobileImages = [mobile1, mobile2, mobile3, mobile4];

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[75vh] lg:min-h-screen w-full flex flex-col items-center justify-center text-gray-300 text-center transition-all duration-500 overflow-hidden mt-0 pt-16">
      {/* sm */}
      <div className="block lg:hidden w-full z-0 overflow-hidden absolute inset-0 bg-black bg-opacity-50">
        <img
          src={mobileImages[imageIndex]}
          alt="Background"
          className="w-full h-full object-cover opacity-50 object-center-45"
        />
      </div>

      {/* lg */}
      <div className="hidden lg:block w-full h-full z-0 overflow-hidden pt-16 absolute inset-0 bg-black bg-opacity-50">
        <img
          src={desktopImages[imageIndex]}
          alt="Background"
          className="w-full h-full object-cover opacity-70 object-center-45"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* content */}
      <div className="p-8 rounded-lg z-10 relative max-w-4xl">
        <h1 className="text-3xl md:text-6xl font-bold text-pretty drop-shadow-2xl leading-10 lg:leading-20">
          10TH PLANET JIU-JITSU PHOENIX
        </h1>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-6 w-full max-w-md mx-auto">
          <div className="inline-flex flex-col lg:flex-row gap-4 justify-center w-full">
            <Button
              content="Learn More"
              backgroundColor="bg-gray-300"
              hover="hover:bg-red-700"
              color="text-black"
              className="h-12 text-lg font-semibold px-6 whitespace-nowrap flex-1"
            />
            <Button
              content="Start Training"
              backgroundColor="bg-red-600"
              hover="hover:bg-red-700"
              color="text-white"
              className="h-12 text-lg font-semibold px-6 whitespace-nowrap flex-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
