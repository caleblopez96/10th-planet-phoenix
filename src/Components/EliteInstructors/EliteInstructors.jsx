import { Link } from "react-router-dom";

import johnBotello from "../../assets/instructor photos/john botello.png";
import ButtonRed from "../Buttons/ButtonRed";

const EliteInstructors = () => {
  const instructors = [
    {
      name: "John Botello",
      title: "Head Coach",
      belt: "Black Belt",
      experience: "15 Years",
      image: johnBotello,
    },
    {
      name: "Eric Anderson",
      title: "Competition Coach",
      belt: "Black Belt",
      experience: "12 Years",
      image: "",
    },
    {
      name: "Keith Trujillo",
      title: "Fundamentals Coach",
      belt: "Black Belt",
      experience: "10 Years",
      image: "",
    },
    {
      name: "Billy Phillips",
      title: "Strength & Conditioning",
      belt: "Black Belt",
      experience: "10 Years",
      image: "",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-16 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-moveGradient"></div>

      <div className="container mx-auto flex flex-col items-center relative z-10">
        <div className="mb-16 text-center relative">
          <h3 className="text-sm uppercase tracking-widest text-red-400 font-bold mb-2">
            Meet the Team
          </h3>
          <div className="relative inline-block">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 relative z-10">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

              <div className="p-8 pt-12 relative">
                <div className="relative mx-auto mb-6">
                  {instructor.image ? (
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full border-4 border-red-500 object-cover mx-auto"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-700 border-4 border-red-500 overflow-hidden mx-auto"></div>
                  )}
                  <div className="absolute -top-5 -right-5 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {instructor.belt}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-red-400 font-medium text-sm mb-4">
                    {instructor.title}
                  </p>

                  <div className="w-12 h-0.5 bg-gray-600 mx-auto my-4"></div>

                  <div className="text-left text-sm text-gray-300 space-y-2">
                    {instructor.experience && (
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        <span className="text-gray-400">Experience:</span>
                        <span className="ml-auto">{instructor.experience}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      <span className="text-gray-400">Rank:</span>
                      <span className="ml-auto">{instructor.belt}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-12 bg-red-600 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Link
                    to="/instructors#instructorBios"
                    className="text-white text-sm font-medium w-full h-full hover:bg-red-700 transition-colors duration-300 cursor-pointer text-center py-4"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ButtonRed content={"Train With Our Team"} />
          <p className="text-gray-400 mt-4">
            Drop in for a free trial class and meet our instructors in person.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EliteInstructors;
