const ButtonLight = ({ content }) => {
  return (
    <button className="px-6 py-3 sm:px-4 sm:py-2 text-base sm:text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition-colors shadow-md cursor-pointer">
      {content}
    </button>
  );
};

export default ButtonLight;
