// UI Component imports
import Button from "../Buttons/Button";
import ctaBackgroundImg from "../../assets/CTA BANNER/adultClass.jpg";

const CTABanner = ({ title = "CLASSES FOR ALL AGES AND SKILL LEVELS" }) => {
  return (
    <section
      className={`relative w-full px-6 py-16 flex flex-col items-center justify-center bg-cover bg-center  lg:h-[50vh]`}
      style={{
        backgroundImage: `url(${ctaBackgroundImg})`,
        backgroundPosition: "center 75%",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10 px-4">
        <h2 className="text-2xl md:text-3xl text-white mb-8 tracking-wider">
          {title}
        </h2>
        <Button color="text-black" />
      </div>
    </section>
  );
};

export default CTABanner;
