import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/10th-planet-phoenix.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full z-50 p-4 transition-all bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-20" />
        </NavLink>

        {/* desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-md"
                  : "cursor-pointer hover:text-red-500 text-md"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-md"
                  : "cursor-pointer hover:text-red-500 text-md"
              }
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-md"
                  : "cursor-pointer hover:text-red-500 text-md"
              }
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-md"
                  : "cursor-pointer hover:text-red-500 text-md"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 text-md"
                  : "cursor-pointer hover:text-red-500 text-md"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
            <span className="block w-6 h-0.75 bg-current mb-1"></span>
            <span className="block w-6 h-0.75 bg-current mb-1"></span>
            <span className="block w-6 h-0.75 bg-current"></span>
          </div>
        </button>
      </div>

      {/* mobile */}
      {isMenuOpen && (
        <div className="md:hidden py-4">
          <ul className="flex flex-col items-center mt-4 space-y-4">
            <li className="w-full text-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 block w-full py-2"
                    : "cursor-pointer block w-full py-2"
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/instructors"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 block w-full py-2"
                    : "cursor-pointer block w-full py-2"
                }
                onClick={toggleMenu}
              >
                Instructors
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/classes"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 block w-full py-2"
                    : "cursor-pointer block w-full py-2"
                }
                onClick={toggleMenu}
              >
                Classes
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 block w-full py-2"
                    : "cursor-pointer block w-full py-2"
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li className="w-full text-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 block w-full py-2"
                    : "cursor-pointer block w-full py-2"
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
