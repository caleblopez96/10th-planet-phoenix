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
      className={`${backgroundColor} ${hover} ${color} cursor-pointer flex flex-col rounded transition-colors font-semibold justify-center align-middle py-2 px-2 text-center ${className}`}
    >
      {content}
    </Link>
  );
};

export default Button;
