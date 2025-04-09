import { Link } from "react-router-dom";

const StartTraining = ({
  content = "Start Training",
  backgroundColor = "bg-red-600",
  hover = "hover:bg-red-700",
}) => {
  return (
    <Link to={"/membership"} className="block">
      <button
        className={`w-full px-4 py-3 text-base ${backgroundColor} ${hover} text-white rounded-md transition-colors shadow-md cursor-pointer`}
      >
        {content}
      </button>
    </Link>
  );
};

export default StartTraining;
