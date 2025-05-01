const Hero2 = ({ content, imageOne, imageTwo }) => {
  return (
    <section id="hero2" className="relative w-full overflow-hidden hero">
      {/* lg */}
      <img
        src={imageOne}
        alt="Background"
        className="w-full max-h-[70vh] object-cover  opacity-90 hidden md:block"
      />

      {/* sm */}
      <img
        src={imageTwo}
        alt="Background"
        className="w-full min-h-[65vh] max-h-[65vh] object-cover opacity-90 transform md:hidden"
      />

      {/* Text */}
      <div className="absolute bottom-4 left-4 z-10 max-w-2xl">
        <p className="text-white text-2xl md:text-4xl lg:text-5xl border-l-4 border-red-700 pl-2 font-bold backdrop-blur-sm backdrop-brightness-50 py-1 pr-3">
          {content}
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="red"
        className="absolute bottom-10 lg:bottom-15 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
      </svg>
    </section>
  );
};

export default Hero2;
