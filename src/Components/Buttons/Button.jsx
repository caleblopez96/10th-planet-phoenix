import { Link } from "react-router-dom";

const Button = ({
  content = "Get Started",
  color = "text-gray-200",
  backgroundColor = "bg-gray-300",
  hover = "hover:bg-gray-400",
  route = "#",
  className = "",
}) => {
  return (
    <Link
      to={route}
      className={`${backgroundColor} ${hover} ${color} cursor-pointer px-4 py-2 rounded transition-colors font-semibold inline-block text-center ${className}`}
    >
      {content}
    </Link>
  );
};

export default Button;
