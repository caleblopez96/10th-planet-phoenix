const Hero2 = ({ content, imageOne, imageTwo }) => {
  return (
    <section className="relative w-full overflow-hidden hero">
      {/* lg */}
      <img
        src={imageOne}
        alt="Background"
        className="w-full max-h-[80vh] object-cover opacity-70 hidden lg:block"
      />

      {/* sm */}
      <img
        src={imageTwo}
        alt="Background"
        className="w-full max-h-[85vh] object-cover opacity-90 transform lg:hidden "
      />

      <p className="absolute bottom-4 left-4 text-gray-300 z-10 text-lg lg:text-4xl border-l-4 border-red-700 pl-2">
        {content}
      </p>
    </section>
  );
};

export default Hero2;
