const ButtonMed = ({ content }) => {
  return (
    <button className="px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 rounded-md transition-colors shadow-md flex-1 cursor-pointer">
      {content}
    </button>
  );
};

export default ButtonMed;
