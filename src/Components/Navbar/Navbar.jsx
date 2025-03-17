import { useState } from "react";
import logo from "../../assets/logo/10th-planet-phoenix.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full z-50 p-4 transition-all bg-white text-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="Logo" className="h-20" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="cursor-pointer hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-4" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
            <span className="block w-6 h-0.75 bg-current mb-1"></span>
            <span className="block w-6 h-0.75 bg-current mb-1"></span>
            <span className="block w-6 h-0.75 bg-current"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-gray-100 py-4">
          <li>
            <a href="#home" className="cursor-pointer" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
