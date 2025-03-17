const Information = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto mb-12 relative">
        <div className="absolute text-6xl text-gray-700 opacity-30 top-0 left-5">
          "
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white text-center my-4 p-5 italic font-light">
          Where other systems cease to grow, 10th Planet finds itself in a
          situation where its entire focus is to continue its own growth.
        </h3>
        <div className="absolute text-6xl text-gray-700 opacity-30 bottom-0 right-5">
          "
        </div>
      </div>

      {/* Content Section with Visual Separation */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
        {/* Left Column - Image/Background */}
        <div className="hidden lg:block relative overflow-hidden rounded-lg shadow-xl">
          <div className="bg-gray-700 h-full w-full p-8 flex items-center justify-center">
            {/* Could be replaced with actual image */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="border-4 border-white bg-gray-800 rounded-full h-48 w-48 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">10P</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
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

          {/* Call to Action Buttons in Horizontal Layout */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors shadow-md flex-1">
              Start Training
            </button>
            <button className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 rounded-md transition-colors shadow-md flex-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
