import { Link } from "react-router-dom";

const ButtonLight = ({
  content = "Get Started",
  backgroundColor = "bg-gray-300",
  hover = "hover:bg-gray-400",
}) => {
  return (
    <Link to={"/contact"} className="w-full block">
      <button
        className={`px-4 py-3 text-base ${backgroundColor} ${hover} text-gray-800 rounded-md transition-colors shadow-md cursor-pointer`}
      >
        {content}
      </button>
    </Link>
  );
};

export default ButtonLight;
