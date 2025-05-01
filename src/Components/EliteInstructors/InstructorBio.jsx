import johnImage from "./instructor images/John/john.webp";
import ericImage from "../../assets/instructor photos/coach_erik.jpg";
import feliciaImage from "../../assets/instructor photos/coach_felicia.jpg";
import billyImage from "../../assets/instructor photos/billy.jpg";
import Button from "../Buttons/Button";

const InstructorBio = () => {
  const instructors = [
    {
      name: "John Botello",
      title: "Head Coach",
      belt: "Black Belt",
      experience: "25 Years",
      img: johnImage,
      bio1: "John Botello, the Chief Instructor and owner of 10th Planet Jiu-Jitsu Phoenix, began his Jiu-Jitsu journey in 2001 while serving in the U.S. Navy in Pearl Harbor, Hawaii, training under Relson Gracie. After moving to San Diego and later Los Angeles, he trained with Rickson Gracie and his black belt Fabio Santos, earning his blue belt. Intrigued by Eddie Bravo, John transitioned to training at 10th Planet Hollywood after one class, eventually abandoning the Gi.",
      bio2: "Certified to teach the 10th Planet Jiu-Jitsu system since 2007, John holds the rank of 3rd-degree black belt under Eddie Bravo and is the first 10th Planet black belt in Arizona. As Eddie Bravo's first 10th Planet affiliate, John fosters a friendly, competitive, and ego-free training environment. Known for his patience and expertise, he provides step-by-step guidance for beginners. Still an active competitor, John believes the best is yet to come, both for 10th Planet Phoenix and the broader 10th Planet Jiu-Jitsu family.",
    },
    {
      name: "Felicia Oh",
      title: "Fundamentals Coach",
      belt: "Black Belt",
      experience: "10 Years",
      img: feliciaImage,
      bio1: "Felicia Oh brings a wealth of knowledge to our fundamentals program. With her extensive experience in both teaching and competing, she excels at breaking down complex techniques into easily digestible concepts for students of all levels.",
      bio2: "As a black belt under renowned instructors, Felicia emphasizes proper technique and body mechanics. Her teaching style focuses on building strong foundations that students can rely on as they progress through their Jiu-Jitsu journey.",
    },
    {
      name: "Eric Anderson",
      title: "Competition Coach",
      belt: "Black Belt",
      experience: "12 Years",
      img: ericImage,
      bio1: "Eric Anderson is our dedicated competition coach with a proven track record of preparing athletes for success at all levels of competition. His strategic approach to training has helped numerous students achieve podium finishes.",
      bio2: "With a focus on competition psychology, game planning, and advanced techniques, Eric pushes his students to perform at their peak while maintaining technical precision under pressure.",
    },
    {
      name: "Billy Phillips",
      title: "Strength & Conditioning",
      belt: "Black Belt",
      experience: "10 years",
      img: billyImage,
      bio1: "Billy Phillips combines his expertise in Jiu-Jitsu with a deep understanding of physical conditioning to create specialized programs that enhance performance on the mats.",
      bio2: "His innovative approach to strength training specifically targets the muscle groups and movement patterns most utilized in Jiu-Jitsu, helping students develop the athleticism needed for high-level performance.",
    },
  ];

  return (
    <section id="instructorBios" className="py-2 my-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* section */}
        <div className=" mb-16">
          <p className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
            Meet the Team
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
            Elite Level <span className="text-red-600">Instructors</span>
          </h2>

          <p>
            Learn from world-class practitioners with decades of combined
            experience in Brazilian Jiu-Jitsu. Our instructors are dedicated to
            your growth and development on the mats.
          </p>
        </div>

        {/* instructors grid */}
        <div className="space-y-24">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={`card rounded-xl shadow-lg overflow-hidden ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } lg:flex`}
            >
              {/* img*/}
              <div className="lg:w-1/3 relative">
                <div className="aspect-w-4 aspect-h-5 lg:aspect-none h-full">
                  <img
                    src={instructor.img}
                    alt={`Coach ${instructor.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {instructor.name === "John Botello" ? (
                      <>
                        <span className="text-red-400">Head Coach</span>{" "}
                        {instructor.name}
                      </>
                    ) : (
                      <>Coach {instructor.name}</>
                    )}
                  </h3>
                  <p className="text-gray-200">
                    {instructor.title} • {instructor.belt} •{" "}
                    {instructor.experience} Experience
                  </p>
                </div>
              </div>

              {/* bio */}
              <div className="lg:w-2/3 p-8 md:p-10 flex flex-col">
                {" "}
                <div className="prose max-w-none flex-1">
                  {" "}
                  <p className="mb-6 text-lg leading-relaxed">
                    {instructor.bio1}
                  </p>
                  {instructor.bio2 && (
                    <p className=" mb-8 text-lg leading-relaxed">
                      {instructor.bio2}
                    </p>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  {" "}
                  <Button
                    route={"/info"}
                    content="Learn More"
                    backgroundColor="bg-gray-300"
                    hover="hover:bg-red-600 hover:text-white"
                    color="text-black"
                    className="h-12 text-lg px-6 w-full text-center"
                  />
                  <Button
                    content="Start Training"
                    backgroundColor="bg-red-600"
                    hover="hover:bg-gray-300 hover:text-black"
                    color="text-white"
                    className="h-12 text-lg px-6 w-full text-center"
                    route={"/contact"}
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

export default InstructorBio;
