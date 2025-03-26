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
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center">
      <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-gray-700/50 p-4 md:p-8 lg:p-8 rounded-lg shadow-lg my-12">
        <ul>
          {facilityFacts.map((fact, index) => (
            <li
              key={index}
              className="text-white
            py-4"
            >
              <h3 className="border-l-4 border-red-700 pl-2 text-balance my-2 font-sm lg:font-lg">
                {fact.title}
              </h3>
              <p>{fact.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Facility;
