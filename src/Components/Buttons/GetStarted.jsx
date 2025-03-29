import { Link } from "react-router-dom";

const ButtonLight = ({
  content = "Get Started",
  backgroundColor = "bg-gray-300",
}) => {
  return (
    <Link to={"/contact"}>
      <button
        className={`px-6 py-3 sm:px-4 sm:py-2 text-base sm:text-sm hover:bg-gray-400 text-gray-800 rounded-md transition-colors shadow-md cursor-pointer flex1 ${backgroundColor}`}
      >
        {content}
      </button>
    </Link>
  );
};

export default ButtonLight;
