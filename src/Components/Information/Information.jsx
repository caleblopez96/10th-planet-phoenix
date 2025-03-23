import { useEffect, useRef } from "react";
import eddieB from "./eddie-bravo.jpg";
import ButtonRed from "../Buttons/ButtonRed";
import ButtonMed from "../Buttons/ButtonMed";

const Information = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto mb-12 relative">
        <div className="absolute text-6xl text-gray-700 opacity-30 top-0 left-5 transition-transform duration-500 hover:scale-110">
          "
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white text-center my-4 p-5 italic font-light opacity-0 transform translate-y-10 transition-all duration-1000">
          Where other systems cease to grow, 10th Planet finds itself in a
          situation where its entire focus is to continue its own growth.
        </h3>
        <div className="absolute text-6xl text-gray-700 opacity-30 bottom-0 right-5 transition-transform duration-500 hover:scale-110">
          "
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
        <div className="lg:block relative overflow-hidden rounded-lg shadow-xl group">
          <div className="bg-gray-700 h-full w-full p-8 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
              <img
                src={eddieB}
                alt="Eddie Bravo vs Royler Gracie at Metamoris 3"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-gray-800/50"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <p className="text-gray-300 leading-relaxed mb-8">
            10th Planet Jiu Jitsu was created by Eddie Bravo under the tutelage
            of Jean Jacques Machado. It is a unique style of no gi Brazilian Jiu
            Jitsu which was made to work both inside the cage and on the
            sporting mats.
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            The intentionality behind the creation was to have an unorthodox
            style which could keep an opponent under constant control and in the
            threat of danger. The 10th Planet system was put to the test in Abu
            Dhabi 2003, and it succeeded masterfully by facilitating Eddie
            Bravo's victory over long time reigning champion Royler Gracie.
            Immediately following that victory, Eddie opened his own school to
            further the system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <ButtonRed content={"Start Training"} />
            <ButtonMed content={"Learn More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
