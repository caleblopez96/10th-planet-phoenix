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
    <section className="p-4 md:p-8 lg:p-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center">
      <div className="w-full max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-gray-500/50 p-4 md:p-12 lg:p-12 rounded-lg shadow-lg my-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-widest my-4 md:mb-8 text-gray-300 text-center lg:text-left">
          GYM ETIQUETTE
        </h2>

        {/* sm */}
        <ol className="space-y-4 md:space-y-6 list-decimal pl-6 md:pl-8 lg:hidden">
          {rules.map((rule, index) => (
            <li
              key={index}
              className="text-xs md:text-sm opacity-80 leading-relaxed text-white"
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
    </section>
  );
};

export default GymEtiquette;
