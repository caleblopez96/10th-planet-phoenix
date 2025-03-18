const ClassesSection = () => {
  const classes = [
    {
      title: "Fundamentals",
      description:
        "Learn the core techniques that form the foundation of 10th Planet Jiu-Jitsu",
      level: "Beginner",
      time: "Mon/Wed/Fri 6:00pm",
    },
    {
      title: "No-Gi Advanced",
      description:
        "Develop your skills with advanced techniques and live training",
      level: "Intermediate",
      time: "Tue/Thu 7:30pm",
    },
    {
      title: "Competition Team",
      description: "Focused training for athletes preparing for tournaments",
      level: "Advanced",
      time: "Sat 10:00am",
    },
    {
      title: "Open Mat",
      description: "Freestyle training session to practice techniques and roll",
      level: "All Levels",
      time: "Sun 12:00pm",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-16 w-full relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <div className="mb-16 text-center">
          <h3 className="text-sm uppercase tracking-widest text-red-400 font-semibold mb-2">
            Something for Everybody
          </h3>
          <h2 className="text-4xl font-bold text-white mb-4">Our Classes</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                index % 2 === 0 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-gray-800 opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-64">
                <div>
                  {/* Level Badge */}
                  <span className="inline-block px-3 py-1 bg-red-900 bg-opacity-50 text-xs text-white rounded-full mb-4">
                    {classItem.level}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 break-words hyphens-auto">
                    {classItem.title}
                  </h3>

                  <p className="text-gray-200 mb-4 text-sm overflow-hidden">
                    {classItem.description}
                  </p>
                </div>

                <div className="flex items-center mt-auto">
                  <span className="text-xs text-gray-200 border-l-2 border-white pl-2 break-words">
                    {classItem.time}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-3 px-6 translate-y-full group-hover:translate-y-0 transition-transform">
                  <button className="text-white text-sm font-medium w-full text-center">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="px-8 py-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-lg">
            View Full Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
