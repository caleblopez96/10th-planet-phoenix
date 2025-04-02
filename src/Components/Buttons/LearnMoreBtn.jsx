import { Link } from "react-router-dom";

const LearnMoreBtn = ({
  content = "Learn More",
  backgroundColor = "bg-gray-800",
  hover = "hover:bg-gray-400",
}) => {
  return (
    <Link to={"/info"}>
      <button
        className={`px-6 py-4 sm:px-4 sm:py-2 text-base sm:text-sm ${hover} text-gray-300 rounded-md transition-colors shadow-md cursor-pointer ${backgroundColor}`}
      >
        {content}
      </button>
    </Link>
  );
};

export default LearnMoreBtn;
