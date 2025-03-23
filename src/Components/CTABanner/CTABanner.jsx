// UI Component imports
import ButtonLight from "../Buttons/ButtonLight";

const CTABanner = ({
  title = "CLASSES FOR ALL AGES AND SKILL LEVELS",
  backgroundColor = "bg-gradient-to-b from-gray-800 to-gray-900",
  overlayOpacity = "opacity-60",
}) => {
  return (
    <section
      className={`relative w-full px-6 py-15 flex flex-col items-center justify-center ${backgroundColor}`}
    >
      <div className="container mx-auto flex flex-col items-center text-center z-10 px-4">
        <h2 className="text-2xl md:text-3xl text-white mb-8 tracking-wider">
          {title}
        </h2>

        <ButtonLight content={"Learn More"} />
      </div>
    </section>
  );
};

export default CTABanner;
