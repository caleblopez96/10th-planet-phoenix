import johnImage from "./instructor images/John/john.webp";

const InstructorBio = () => {
  const instructors = [
    {
      name: "John Botello",
      title: "Head Coach",
      belt: "Black Belt",
      experience: "15 Years",
      img: johnImage,
      bio1: "John Botello, the Chief Instructor and owner of 10th Planet Jiu-Jitsu Phoenix, began his Jiu-Jitsu journey in 2001 while serving in the U.S. Navy in Pearl Harbor, Hawaii, training under Relson Gracie. After moving to San Diego and later Los Angeles, he trained with Rickson Gracie and his black belt Fabio Santos, earning his blue belt. Intrigued by Eddie Bravo, John transitioned to training at 10th Planet Hollywood after one class, eventually abandoning the Gi. In 2006, John was persuaded by his sister to stay in Arizona, where he trained under Edward Rene Sanchez at Sitan Gym and earned his purple belt in 2007.",
      bio2: "Certified to teach the 10th Planet Jiu-Jitsu system since 2007, John holds the rank of 3rd-degree black belt under Eddie Bravo and is the first 10th Planet black belt in Arizona. As Eddie Bravo's first 10th Planet affiliate, John fosters a friendly, competitive, and ego-free training environment. Known for his patience and expertise, he provides step-by-step guidance for beginners. Still an active competitor, John believes the best is yet to come, both for 10th Planet Phoenix and the broader 10th Planet Jiu-Jitsu family.",
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
    <div id="instructorBios" className="py-12">
      {instructors.map((instructor, index) => (
        <div key={index}>
          <div className="max-w-4xl mx-auto mb-12 relative ">
            <div className="absolute text-6xl opacity-30 top-0 left-5">"</div>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-center my-4 p-5 italic">
              {instructor.name === "John Botello" ? (
                <>
                  <span className="text-red-500">Head Coach</span>{" "}
                  {instructor.name}
                  <div className="absolute -bottom-3 left-0 lg:w-full h-1 bg-red-500"></div>
                </>
              ) : (
                `Coach ${instructor.name}`
              )}
            </h3>

            <div className="absolute text-6xl opacity-30 bottom-0 right-5">
              "
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
            <div className="lg:block relative overflow-hidden rounded-lg shadow-xl">
              <div className="h-full w-full p-4 flex items-center justify-center">
                <div className="w-full h-full  flex items-center justify-center card">
                  {instructor.img ? (
                    <img
                      src={instructor.img}
                      alt={`Coach ${instructor.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="border-4 border-red-500  rounded-full h-48 w-48 flex items-center justify-center card">
                      <span className="text-4xl font-bold">
                        {instructor.name.substring(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg shadow-xl card">
              {instructor.bio1 ? (
                <p className="leading-relaxed mb-8">{instructor.bio1}</p>
              ) : (
                <p className=" leading-relaxed mb-8">
                  {instructor.name} is a {instructor.belt} instructor with{" "}
                  {instructor.experience || "extensive"} experience in
                  Jiu-Jitsu. As our {instructor.title},{" "}
                  {instructor.name.split(" ")[0]} brings dedication and
                  expertise to every class.
                </p>
              )}

              {instructor.bio2 && (
                <p className="leading-relaxed mb-8">{instructor.bio2}</p>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-md transition-colors shadow-md flex-1">
                  Start Training
                </button>
                <button className="px-8 py-4 bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-md transition-colors shadow-md flex-1">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstructorBio;
