import { Link } from "react-router-dom";

const LearnMoreBtn = ({ content = "Learn More" }) => {
  return (
    <Link to={"/about"}>
      <button className="px-6 py-3 sm:px-4 sm:py-2 text-base sm:text-sm bg-gray-800 hover:bg-gray-400 text-gray-300 rounded-md transition-colors shadow-md cursor-pointer">
        {content}
      </button>
    </Link>
  );
};

export default LearnMoreBtn;
