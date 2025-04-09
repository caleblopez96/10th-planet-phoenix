import { Link } from "react-router-dom";

const LearnMoreBtn = ({
  content = "Learn More",
  backgroundColor = "bg-gray-600",
  hover = "hover:bg-gray-700",
}) => {
  return (
    <Link to={"/info"} className="w-full block">
      <button
        className={`px-4 py-3 text-base ${backgroundColor} ${hover} text-white rounded-md transition-colors shadow-md cursor-pointer`}
      >
        {content}
      </button>
    </Link>
  );
};

export default LearnMoreBtn;
