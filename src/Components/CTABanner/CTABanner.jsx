// UI Component imports
import Button from "../Buttons/Button";
import ctaBackgroundImg from "../../assets/CTA BANNER/adultClass.jpg";

const CTABanner = ({ title = "TRY A FREE CLASS TODAY" }) => {
  return (
    <section className="relative w-full px-6 py-16 flex flex-col items-center justify-center lg:h-[50vh] overflow-hidden">
      <div className="border-8 border-red-500">
        <img
          src={ctaBackgroundImg}
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover object-[center_60%] rounded-lg"
        />
      </div>
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto flex flex-col items-center text-center relative z-10 px-4">
        <h2 className="text-2xl md:text-3xl text-white mb-8 tracking-wider">
          {title}
        </h2>
        <Button
          color="text-black"
          hover="hover:bg-red-600 hover:text-white"
          content="Get Started"
          route={"/contact"}
        />
      </div>
    </section>
  );
};

export default CTABanner;
