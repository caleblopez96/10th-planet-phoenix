import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/10th-planet-phoenix.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const basename = "/10th-planet-phoenix";

  return (
    <nav className="fixed w-full z-50 p-4 transition-all bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={`${basename}`}>
          <img src={logo} alt="Logo" className="h-20" />
        </Link>

        {/* desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to={`${basename}`}
              className="cursor-pointer hover:text-blue-500 text-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`${basename}/instructors`}
              className="cursor-pointer hover:text-blue-500 text-md"
            >
              Instructors
            </Link>
          </li>
          <li>
            <Link
              to={`${basename}/classes`}
              className="cursor-pointer hover:text-blue-500 text-md"
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              to={`${basename}/about`}
              className="cursor-pointer hover:text-blue-500 text-md"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={`${basename}/contact`}
              className="cursor-pointer hover:text-blue-500 text-md"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden ml-4" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
            <span className="block w-6 h-0.75 bg-current mb-1"></span>
            <span className="block w-6 h-0.75 bg-current mb-1"></span>
            <span className="block w-6 h-0.75 bg-current"></span>
          </div>
        </div>
      </div>

      {/* mobile */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 py-4">
          <li>
            <Link
              to={`${basename}`}
              className="cursor-pointer"
              onClick={(e) => {
                toggleMenu();
                alert("FUCKING CHRIS");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`${basename}/instructors`}
              className="cursor-pointer"
              onClick={toggleMenu}
            >
              Instructors
            </Link>
          </li>
          <li>
            <Link
              to={`${basename}/classes`}
              className="cursor-pointer"
              onClick={toggleMenu}
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              to={`${basename}/about`}
              className="cursor-pointer"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={`${basename}/contact`}
              className="cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
