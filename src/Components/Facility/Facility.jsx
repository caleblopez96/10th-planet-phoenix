const facilityFacts = [
  {
    title: "Intimate Training Space: ",
    description:
      "Our gym may be cozy, but it’s packed with energy. With ample mat space, it’s perfect for both beginners and experienced practitioners to train and grow.",
  },
  {
    title: "Friendly and Welcoming Environment: ",
    description:
      "We may be a smaller facility, but we believe in building a strong sense of community. You'll always feel at home here, surrounded by like-minded individuals who are eager to learn and support one another.",
  },
  {
    title: "Clean and Organized: ",
    description:
      "We maintain a clean, clutter-free gym, with mats sanitized regularly to keep our training space fresh and hygienic for every class.",
  },
];

const Facility = () => {
  return (
    <section id="facility" className="">
      <div className="container px-4 mb-6">
        <h2 className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          Facility Amenties
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
          Unlimited
          <span className="text-red-600"> Access</span>
        </h3>
      </div>
      <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl p-4 rounded-lg shadow-lg my-12">
        <ul>
          {facilityFacts.map((fact, index) => (
            <li key={index} className=" card my-4">
              <h3 className="border-l-4 border-red-700 p-2 text-balance my-2 font-sm lg:font-lg">
                {fact.title}
              </h3>
              <p className="p-2">{fact.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Facility;
