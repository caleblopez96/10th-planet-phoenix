import { Link } from "react-router-dom";

const LearnMoreBtnLg = ({
  content = "Learn More",
  backgroundColor = "bg-gray-800",
  hover = "hover:bg-gray-400",
}) => {
  return (
    <Link to={"/info"}>
      <button
        className={`px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white sm:text-sm border border-gray-600 rounded-md transition-colors shadow-md flex-1 w-full cursor-pointer lg:text-md ${hover} ${backgroundColor}`}
      >
        {content}
      </button>
    </Link>
  );
};

export default LearnMoreBtnLg;
