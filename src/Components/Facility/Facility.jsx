const facilityFacts = [
  {
    title: "Intimate Training Space",
    description:
      "Our gym may be cozy, but it’s packed with energy. With ample mat space, it’s perfect for both beginners and experienced practitioners to train and grow.",
  },
  {
    title: "Friendly and Welcoming Environment",
    description:
      "We may be a smaller facility, but we believe in building a strong sense of community. You'll always feel at home here, surrounded by like-minded individuals eager to learn and support one another.",
  },
  {
    title: "Clean and Organized",
    description:
      "We maintain a clean, clutter-free gym, with mats sanitized regularly to keep our training space fresh and hygienic for every class.",
  },
];

const Facility = () => {
  return (
    <section id="facility" className="">
      <div className="container mb-10">
        <p className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          Facility Amenities
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 relative z-10">
          Unlimited
          <span className="text-red-600"> Access</span>
        </h2>
        <p className="text-sm md:text-base opacity-70 max-w-2xl">
          Our no-gi facility was built for one thing — to give you the best
          place to train, grow, and connect with your teammates. Here’s what
          makes our spot special:
        </p>
      </div>

      <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {facilityFacts.map((fact, index) => (
          <div
            key={index}
            className="rounded-lg p-6 shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              {fact.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facility;
