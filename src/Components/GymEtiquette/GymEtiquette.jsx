const GymEtiquette = () => {
  const rules = [
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
    "And set of luggage barbecue colorbox book 5 watt mean betide crucifix",
  ];

  return (
    <section id="about" className="rounded-lg">
      <div className="container px-4 mb-6">
        <h2 className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          Gym Etiquette
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
          Rules of the
          <span className="text-red-600"> Gym</span>
        </h3>
      </div>
      <div className="card container">
        <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl p-4 md:p-8 rounded-lg shadow-lg flex justify-center items-center">
          {/* sm */}
          <ol className="space-y-4 md:space-y-6 list-decimal pl-6 md:pl-8 lg:hidden">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="text-xs md:text-sm opacity-80 leading-relaxed"
              >
                {rule}
              </li>
            ))}
          </ol>

          {/* lg */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6">
            {rules.map((rule, index) => (
              <div key={index} className="flex">
                <span className="text-sm mr-3 font-medium opacity-90">
                  {index + 1}.
                </span>
                <span className="text-sm opacity-80">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymEtiquette;
