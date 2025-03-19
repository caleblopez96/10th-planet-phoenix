const EliteInstructors = () => {
  const instructors = [
    {
      name: "John Botello",
      title: "Head Coach",
      belt: "Black Belt",
      experience: "15 Years",
    },
    {
      name: "Eric Anderson",
      title: "Competition Coach",
      belt: "Black Belt",
      experience: "12 Years",
    },
    {
      name: "Keith Trujillo",
      title: "Fundamentals Coach",
      belt: "Black Belt",
      experience: "10 Years",
    },
    {
      name: "Sarah Williams",
      title: "Strength & Conditioning",
      belt: "Black Belt",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-16 w-full relative">
      {/* background */}
      <div className="absolute inset-0 opacity-5"></div>

      <div className="container mx-auto flex flex-col items-center relative z-10">
        {/* header */}
        <div className="mb-16 text-center relative">
          <h3 className="text-sm uppercase tracking-widest text-red-400 font-bold mb-2">
            Meet the Team
          </h3>
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-white mb-2 relative z-10">
              Elite Level <span className="text-red-500">Instructors</span>
            </h2>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-red-500"></div>
          </div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Learn from world-class practitioners with decades of combined
            experience in Brazilian Jiu-Jitsu. Our instructors are dedicated to
            your growth and development on the mats.
          </p>
        </div>

        {/* instructor cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Color Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

              {/* Instructor Content */}
              <div className="p-8 pt-12 relative">
                {/* Profile Image with Ring */}
                <div className="relative mx-auto mb-6">
                  <div className="w-24 h-24 rounded-full bg-gray-700 border-4 border-red-500 overflow-hidden mx-auto">
                    {/* Replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {instructor.belt}
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-red-400 font-medium text-sm mb-4">
                    {instructor.title}
                  </p>

                  <div className="w-12 h-0.5 bg-gray-600 mx-auto my-4"></div>

                  {/* Stats with Icon Indicators */}
                  <div className="text-left text-sm text-gray-300 space-y-2">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-400">Experience:</span>
                      <span className="ml-auto">{instructor.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-400">Rank:</span>
                      <span className="ml-auto">{instructor.belt}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-red-600 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="text-white text-sm font-medium w-full h-full">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-lg">
            Train With Our Team
          </button>
          <p className="text-gray-400 mt-4">
            Drop in for a free trial class and meet our instructors in person
          </p>
        </div>
      </div>
    </section>
  );
};

export default EliteInstructors;
