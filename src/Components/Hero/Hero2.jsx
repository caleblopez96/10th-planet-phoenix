const Hero2 = ({ content, imageOne, imageTwo }) => {
  return (
    <section className="relative w-full overflow-hidden ">
      {/* lg */}
      <img
        src={imageOne}
        alt="Background"
        className="w-full object-cover opacity-70 hidden lg:block translate-y-15"
      />

      {/* sm */}
      <img
        src={imageTwo}
        alt="Background"
        className="w-full min-h-[25vh]object-cover opacity-90 transform translate-y-20 lg:hidden "
      />

      <p className="absolute bottom-4 left-4 text-white z-10 text-lg lg:text-4xl border-l-4 border-red-700 pl-2">
        {content}
      </p>
    </section>
  );
};

export default Hero2;
