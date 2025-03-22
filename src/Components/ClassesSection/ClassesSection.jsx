import banner from "./10th-planet-phoenix (1).png";

const ClassesSection = () => {
  const classes = [
    {
      title: "Fundamentals",
      description:
        "The 10th Planet warm-ups are dynamic BJJ exchanges that go beyond static drills, helping beginners grasp jiu-jitsu concepts through sequenced movements. By emphasizing transitions, attacking combinations, and counters with active resistance, these exercises create a more engaging and practical training experience compared to traditional drills with passive partners.",
      level: "Beginner",
      time: "Mon/Wed 6:00-7:00 PM",
    },
    {
      title: "All Levels Jiu-Jitsu",
      description:
        "All Levels classes are open to both beginners and more experienced practitioners looking to learn and sharpen technique. At 10th Planet Jiu Jitsu Phoenix we offer a variety of different packages to meet all of your training needs. From 1 year contracted memberships to month to month options, we have you covered! ",
      level: "All Levels",
      time: "Mon/Tue/Wed/Thur 7:00-8:30 PM",
    },
    {
      title: "Kids Little Lobos Jiu-Jitsu",
      description:
        "Our 10th Planet Little Lobos Kids Class is a fun and engaging program that introduces children to 10th Planet Jiu-Jitsu through structured drills and exercises. With a focus on confidence, self-defense, discipline, and teamwork, our highly trained coach fosters a love for movement in a positive and encouraging environment. Beyond the mats, the class builds a strong, family-friendly community through gym events, competitions, and social activities, creating a supportive network for both kids and parents.",
      level: "All Levels",
      time: "Tue/Thur/ 5:00-6:00 PM & Sat 10:00-11:00 AM",
    },
    {
      title: "Open Mat",
      description: "Freestyle training session to practice techniques and roll",
      level: "All Levels",
      time: "Sat 11:00 AM 1:00 PM",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-16 w-full relative">
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <div className="mb-16 text-center">
          <h3 className="text-sm uppercase tracking-widest text-red-400 font-semibold mb-2">
            Something for Everybody
          </h3>
          <h2 className="text-4xl font-bold text-white mb-4">Our Classes</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* class cards - improved layout for larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                index % 2 === 0 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-gray-800 opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-between lg:h-96">
                <div>
                  <span className="inline-block px-3 py-1 bg-red-900 bg-opacity-50 text-xs text-white rounded-full mb-4">
                    {classItem.level}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 break-words hyphens-auto">
                    {classItem.title}
                  </h3>

                  <div className="h-40 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                      {classItem.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-4">
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
