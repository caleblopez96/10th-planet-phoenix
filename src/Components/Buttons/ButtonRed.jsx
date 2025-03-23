const ButtonRed = ({ content }) => {
  return (
    <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors shadow-md flex-1 cursor-pointer">
      {content}
    </button>
  );
};

export default ButtonRed;
