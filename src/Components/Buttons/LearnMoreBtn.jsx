import { Link } from "react-router-dom";

const LearnMoreBtn = ({
  content = "Learn More",
  backgroundColor = "bg-gray-800",
  hover = "hover:bg-gray-400",
}) => {
  return (
    <Link to={"/info"}>
      <button
        className={`
          px-4 py-2 
          sm:px-5 sm:py-2.5
          md:px-6 md:py-3
          lg:px-7 lg:py-3.5
          xl:px-8 xl:py-4
          text-sm
          sm:text-sm
          md:text-base
          lg:text-base
          xl:text-lg
          ${hover}
          text-gray-300
          rounded-md
          transition-colors
          duration-300
          shadow-md
          hover:shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-gray-500
          cursor-pointer
          ${backgroundColor}
        `}
      >
        {content}
      </button>
    </Link>
  );
};

export default LearnMoreBtn;
