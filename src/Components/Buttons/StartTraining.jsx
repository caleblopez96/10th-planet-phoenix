import { Link } from "react-router-dom";

const StartTraining = ({
  content = "Start Training",
  backgroundColor = "bg-red-600",
  hover = "hover:bg-red-700",
}) => {
  return (
    <Link to={"/membership"} className="w-full block">
      <button
        className={`w-full px-8 py-4 ${backgroundColor} ${hover} text-white rounded-md transition-colors shadow-md cursor-pointer lg:text-medium`}
      >
        {content}
      </button>
    </Link>
  );
};

export default StartTraining;
