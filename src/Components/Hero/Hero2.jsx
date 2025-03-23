import eddie from "../../Components/Information/eddie-bravo.jpg";
import johnKeith from "../../assets/HERO SM/IMG_20210703_121346.jpg";

const Hero2 = ({ content }) => {
  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* lg */}
      <img
        src={eddie}
        alt="Background"
        className="w-full h-full object-cover opacity-70 object-[50% 0%] hidden lg:block"
      />

      {/* sm */}
      <img
        src={johnKeith}
        alt="Background"
        className="w-full h-full object-cover opacity-70 transform translate-y-28 lg:hidden"
      />

      <p className="absolute bottom-4 left-4 text-white z-10 text-lg lg:text-4xl border-l-4 border-red-700 pl-2">
        {content}
      </p>

      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Hero2;
