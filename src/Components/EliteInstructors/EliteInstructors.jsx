import { Link } from "react-router-dom";

import johnBotello from "../../assets/instructor photos/john botello.png";
import eric from "../../assets/instructor photos/coach_erik.jpg";
import felicia from "../../assets/instructor photos/coach_felicia.jpg";
import billy from "../../assets/instructor photos/billy.jpg";
import Button from "../Buttons/Button";

const EliteInstructors = () => {
  const instructors = [
    {
      firstName: "John",
      lastName: "Botello",
      name: "John Botello",
      title: "Head Coach, Fundamentals, Kids, Competition",
      belt: "Black Belt",
      experience: "25 Years",
      image: johnBotello,
    },
    {
      firstName: "Felicia",
      lastName: "Oh",
      name: "Felicia Oh",
      title: "Competition Coach, Fundamentals Coach",
      belt: "Black Belt",
      experience: "20 Years",
      image: felicia,
    },
    {
      firstName: "Eric",
      lastName: "Anderson",
      name: "Eric Anderson",
      title: "Fundamentals Coach, Strength & Conditioning",
      belt: "Black Belt",
      experience: "15 Years",
      image: eric,
    },
    {
      firstName: "Billy",
      lastName: "Phillips",
      name: "Billy Phillips",
      title: "Fundamentals Coach, Strength & Conditioning",
      belt: "Black Belt",
      experience: "10 Years",
      image: billy,
    },
  ];

  return (
    <section className="px-4 py-8 lg:py-16 w-full overflow-hidden inset-0">
      <h3 className="text-sm uppercase tracking-widest text-red-600 font-bold mb-2">
        Meet the Team
      </h3>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 relative z-10">
        Elite Level <span className="text-red-600">Instructors</span>
      </h2>

      <p className="mt-6 max-w-2xl">
        Learn from world-class practitioners with decades of combined experience
        in Brazilian Jiu-Jitsu. Our instructors are dedicated to your growth and
        development on the mats.
      </p>
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <div className="mb-16 text-center relative"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>

              <div className="p-8 pt-12 pb-12 relative h-full flex flex-col card">
                <div className="relative mx-auto mb-6">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full border-4 border-red-600 object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute -top-7 sm:-right-25 lg:-right-15 bg-red-600 text-xs text-white rounded-full px-2 py-1">
                    {instructor.belt}
                  </div>
                </div>

                <div className="text-center mb-6 flex-grow">
                  <h3 className="text-xl font-bold mb-1">
                    {instructor.firstName} <br /> {instructor.lastName}
                  </h3>
                  <p className="text-red-600 font-medium text-sm mb-4">
                    {instructor.title}
                  </p>

                  <div className="w-12 h-0.5 bg-gray-600 mx-auto my-4"></div>

                  <div className="text-left text-sm space-y-2">
                    {instructor.experience && (
                      <div className="flex items-center">
                        <span className="w-2 bg-red-600 rounded-full mr-2"></span>
                        <span className="">Experience:</span>
                        <span className="ml-auto">{instructor.experience}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <span className="w-2 bg-red-600 rounded-full mr-2"></span>
                      <span className="">Rank:</span>
                      <span className="ml-auto">{instructor.belt}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link
                    to="/instructors#instructorBios"
                    className="block w-full bg-gray-200 hover:bg-red-600 hover:text-gray-200 transition-colors duration-300 text-sm py-3 text-center rounded-md text-black font-bold"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            color="text-black"
            hover="hover:bg-red-600 hover:text-white"
            content="Meet the Team"
            route={"/instructors"}
          />
          <p className="mt-4">
            Drop in for a free trial class and meet our instructors in person.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EliteInstructors;
