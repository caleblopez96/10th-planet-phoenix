const Hero2 = ({ content, imageOne, imageTwo }) => {
  return (
    <section className="relative w-full overflow-hidden hero">
      {/* lg */}
      <img
        src={imageOne}
        alt="Background"
        className="w-full max-h-[87vh] object-cover object-[center_15%] opacity-70 hidden lg:block"
      />

      {/* sm */}
      <img
        src={imageTwo}
        alt="Background"
        className="w-full min-h-[85vh] max-h-[85vh] object-cover opacity-90 transform lg:hidden "
      />

      <p className="absolute bottom-4 left-4 text-gray-300 z-10 text-lg lg:text-4xl border-l-4 border-red-700 pl-2">
        {content}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 -960 960 960"
        width="30px"
        fill="red"
        className="absolute bottom-10 lg:bottom-30 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
      </svg>
    </section>
  );
};

export default Hero2;
