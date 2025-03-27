// images desktop
import { useState, useEffect } from "react";
import desktop1 from "../../assets/HERO LG/MCC_8853(2).jpg";
import desktop2 from "../../assets/HERO LG/MCC_8792.jpg";
import desktop3 from "../../assets/HERO LG/20220112_200025.jpg";
import desktop4 from "../../assets/HERO LG/received_10100266450098952.jpeg";

// images mobile
import mobile1 from "../../assets/HERO SM/20211025_200740.jpg";
import mobile2 from "../../assets/HERO SM/20220122_113831_edited.jpg";
import mobile3 from "../../assets/HERO SM/20220627_185141.jpg";
import mobile4 from "../../assets/HERO SM/IMG_20210703_121346.jpg";

// UI Components
import ButtonDark from "../Buttons/ButtonDark";
import ButtonLight from "../Buttons/ButtonLight";
import { NavLink, Route } from "react-router-dom";

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
      <div className="block lg:hidden w-full z-0 overflow-hidden pt-16 absolute inset-0 bg-black bg-opacity-50 mt-10">
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

      {/* content*/}
      <div className="p-8 rounded-lg z-10 relative max-w-4xl pt-24">
        <h1 className="text-4xl md:text-6xl font-bold text-pretty drop-shadow-2xl leading-15 lg:leading-20">
          10TH PLANET JIU-JITSU PHOENIX
        </h1>
        <p className="text-lg md:text-xl mt-4 drop-shadow-2xl">
          LEARN THIS UNIQUE STYLE OF SUBMISSION GRAPPLING
        </p>

        <div className="flex justify-center gap-4 mt-6 sm:mt-4">
          {/* idk if this is best practice. research into it */}
          {/* the other way im thinking is add it to the component, but right now im rendering the button dynamically based on the content prop*/}
          <NavLink to={"/contact"}>
            <ButtonLight content={"Get Started"} />
          </NavLink>
          <NavLink to={"/about"}>
            <ButtonDark content={"Learn More"} />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
