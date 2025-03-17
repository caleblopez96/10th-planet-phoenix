const ClassesSection = () => {
  return (
    <section className="bg-gray-500 px-4 py-12 flex flex-col items-center w-full">
      <div className="container mx-auto flex flex-col items-center">
        <h3 className="text-sm uppercase text-gray-300 text-center">
          Something for Everybody
        </h3>
        <h2 className="text-2xl font-bold italic text-white text-center mb-8">
          Classes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {/* Class 1 */}
          <div className="w-full h-48 bg-gray-300 rounded-lg shadow-md flex items-center justify-center transition-transform hover:scale-105">
            <span className="text-gray-700 font-medium">Class 1</span>
          </div>

          {/* Class 2 */}
          <div className="w-full h-48 bg-gray-300 rounded-lg shadow-md flex items-center justify-center transition-transform hover:scale-105">
            <span className="text-gray-700 font-medium">Class 2</span>
          </div>

          {/* Class 3 */}
          <div className="w-full h-48 bg-gray-300 rounded-lg shadow-md flex items-center justify-center transition-transform hover:scale-105">
            <span className="text-gray-700 font-medium">Class 3</span>
          </div>

          {/* Class 4 */}
          <div className="w-full h-48 bg-gray-300 rounded-lg shadow-md flex items-center justify-center transition-transform hover:scale-105">
            <span className="text-gray-700 font-medium">Class 4</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
