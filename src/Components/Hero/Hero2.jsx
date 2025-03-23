const Hero2 = ({ content, imageOne, imageTwo }) => {
  return (
    <section className="relative w-full overflow-hidden ">
      {/* lg */}
      <img
        src={imageOne}
        alt="Background"
        className="w-full object-cover opacity-70 object-[50% 0%] hidden lg:block translate-y-20"
      />

      {/* sm */}
      <img
        src={imageTwo}
        alt="Background"
        className="w-full object-cover opacity-70 transform translate-y-20 lg:hidden"
      />

      <p className="absolute bottom-4 left-4 text-white z-10 text-lg lg:text-4xl border-l-4 border-red-700 pl-2">
        {content}
      </p>

      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
  );
};

export default Hero2;
