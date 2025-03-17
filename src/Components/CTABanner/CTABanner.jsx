const CTABanner = ({
  title = "CLASSES FOR ALL AGES AND SKILL LEVELS",
  buttonText = "Learn More",
  buttonLink = "#",
  backgroundImage = "",
  backgroundColor = "bg-gray-700",
  overlayOpacity = "opacity-60",
  onClick,
}) => {
  return (
    <section
      className={`relative w-full px-6 py-15 flex flex-col items-center justify-center ${
        !backgroundImage ? backgroundColor : ""
      }`}
    >
      {backgroundImage && (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-black ${overlayOpacity}`}
            ></div>
          </div>
        </>
      )}

      <div className="container mx-auto flex flex-col items-center text-center z-10 px-4">
        <h2 className="text-2xl md:text-3xl text-white mb-8 tracking-wider">
          {title}
        </h2>

        <button
          onClick={onClick}
          className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors shadow-md"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
