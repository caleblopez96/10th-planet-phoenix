const GymEtiquette = () => {
  const rules = [
    "Always show respect to your training partners, instructors, and the academy.",
    "Wear clean, proper No-Gi attire — rash guard, shorts without pockets, zippers, or buttons.",
    "Keep your body clean, nails trimmed, and avoid heavy cologne or lotion.",
    "Never walk on the mats with shoes or dirty feet.",
    "Tap early and often — safety comes first for you and your partners.",
    "If you're sick or feeling unwell, stay home until fully recovered.",
    "No coaching from the sidelines during rolling sessions.",
    "Be mindful of your space to avoid collisions during rolls.",
    "Help clean the mats after class when asked or as a courtesy.",
    "Leave your ego at the door — focus on learning and improvement, not winning rolls.",
  ];

  return (
    <section id="about" className="rounded-lg">
      <div className="container mb-10">
        <p className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          Gym Etiquette
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 relative z-10">
          Rules of the
          <span className="text-red-600"> Gym</span>
        </h2>
        <p className="text-sm md:text-base opacity-70 max-w-2xl">
          Respect the space, your partners, and yourself. Follow these basic
          guidelines to keep our mats safe, clean, and welcoming for everyone.
        </p>
      </div>

      <div className="container">
        <div className="card p-4 md:p-8 rounded-lg shadow-lg bg-white/5 backdrop-blur-md">
          {/* Mobile & Tablet List */}
          <ol className="space-y-4 list-decimal pl-6 md:pl-8 lg:hidden">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="text-sm opacity-80 leading-relaxed transition-opacity duration-300 hover:opacity-100"
              >
                {rule}
              </li>
            ))}
          </ol>

          {/* Large Screens Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="text-sm font-medium text-red-600">
                  {index + 1}.
                </span>
                <span className="text-sm opacity-80 leading-relaxed">
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymEtiquette;
