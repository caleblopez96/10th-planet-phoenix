const EliteInstructors = () => {
  return (
    <section className="bg-gray-200 px-4 py-12 flex flex-col items-center w-full">
      <div className="container mx-auto flex flex-col items-center">
        <h3 className="text-sm uppercase text-gray-500 text-center">
          Meet the Team
        </h3>
        <h2 className="text-2xl font-bold italic text-center">Elite Level</h2>
        <h2 className="text-2xl font-bold italic text-center mb-8">
          Instructors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="w-full h-60 bg-gray-400 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all hover:bg-gray-500">
            <div className="w-20 h-20 rounded-full bg-gray-600 mb-4"></div>
            <span className="text-gray-700 font-medium text-lg">
              Instructor 1
            </span>
            <p className="text-gray-600 text-sm mt-2 px-4 text-center">
              First Last
            </p>
          </div>

          <div className="w-full h-60 bg-gray-400 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all hover:bg-gray-500">
            <div className="w-20 h-20 rounded-full bg-gray-600 mb-4"></div>
            <span className="text-gray-700 font-medium text-lg">
              Instructor 2
            </span>
            <p className="text-gray-600 text-sm mt-2 px-4 text-center">
              First Last
            </p>
          </div>

          <div className="w-full h-60 bg-gray-400 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all hover:bg-gray-500">
            <div className="w-20 h-20 rounded-full bg-gray-600 mb-4"></div>
            <span className="text-gray-700 font-medium text-lg">
              Instructor 3
            </span>
            <p className="text-gray-600 text-sm mt-2 px-4 text-center">
              First Last
            </p>
          </div>

          <div className="w-full h-60 bg-gray-400 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all hover:bg-gray-500">
            <div className="w-20 h-20 rounded-full bg-gray-600 mb-4"></div>
            <span className="text-gray-700 font-medium text-lg">
              Instructor 4
            </span>
            <p className="text-gray-600 text-sm mt-2 px-4 text-center">
              First Last
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteInstructors;
