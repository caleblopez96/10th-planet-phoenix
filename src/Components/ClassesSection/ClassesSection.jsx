import Button from "../Buttons/Button";

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
    <section className="px-4 w-full relative">
      <div className="container mb-6">
        <h2 className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
          Classes
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
          Something For
          <span className="text-red-600"> Everyone</span>
        </h3>
        <p className="mt-6 max-w-2xl text-sm">
          Learn from world-class practitioners with decades of combined
          experience in Brazilian Jiu-Jitsu. Our instructors are dedicated to
          your growth and development on the mats.
        </p>
      </div>
      <div className="container flex flex-col justify-center items-center z-10">
        {/* class cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl ">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-2 card`}
            >
              <div className="bg-gradient-to-r from-white via-gray-50 to-whiteopacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-between lg:h-96">
                <div>
                  <span className="inline-block px-3 py-1 bg-red-500 bg-opacity-50 text-xs rounded-full mb-4">
                    {classItem.level}
                  </span>

                  <h3 className="text-sm font-bold mb-2 break-words hyphens-auto">
                    {classItem.title}
                  </h3>

                  <div className="h-40 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="mb-4 text-sm leading-relaxed">
                      {classItem.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-center align-middle">
                  <Button
                    color="text-black"
                    content="Meet the Team"
                    route={"/instructors"}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
