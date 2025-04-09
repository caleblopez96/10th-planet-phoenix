import { Link } from "react-router-dom";

const Button = ({
  content = "Get Started",
  color = "text-gray-200",
  backgroundColor = "bg-gray-300",
  hover = "hover:bg-gray-400",
  route,
  className = "", // Add this line to accept the className prop
}) => {
  return (
    <Link to={route} className={className}>
      {" "}
      <button
        className={`${backgroundColor} ${hover} ${color} cursor-pointer px-4 py-2 rounded font-medium transition-colors w-full`}
      >
        {content}
      </button>
    </Link>
  );
};

export default Button;
