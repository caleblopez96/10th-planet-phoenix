import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import lightLogo from "../../assets/10PLogoLight.webp";
import darkLogo from "../../assets/10PLogoDark.webp";
import { useTheme } from "../../ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const { isNightMode, toggleNightMode } = useTheme();

  // after navigating with mobile menu and clicking on one of them,
  //  reset active dropdowns
  useEffect(() => {
    setActiveDropdown(null);
  }, [isMenuOpen, location]);

  // handle scroll to section when URL hash changes, but not right away
  // wait 1 ms and smooth scroll
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // nav items
  const navItems = [
    { name: "Home", path: "/", sections: [], showDropdown: false },
    {
      name: "Classes",
      path: "/classes",
      sections: ["schedule", "Descriptions"],
      showDropdown: true,
    },
    {
      name: "Info",
      path: "/info",
      sections: ["About", "Facility", "Pricing"],
      showDropdown: true,
    },
    {
      name: "Instructors",
      path: "/instructors",
      sections: [],
      showDropdown: false,
    },
    {
      name: "Shop",
      path: "/shop",
      sections: [],
      showDropdown: false,
    },
    { name: "Contact", path: "/contact", sections: [], showDropdown: false },
  ];

  // func to toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  const handleNavItemClick = (item) => {
    if (!item.showDropdown || window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`w-full z-50 p-4 sticky top-0 shadow-2xl`}>
      <div className="flex justify-between items-center md:justify-between">
        {/* hamburger */}
        <div className="md:hidden flex align-middle">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-7 w-7 ${
                  isNightMode ? "text-white" : "text-black"
                }`}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : isNightMode ? (
              // Dark mode hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            ) : (
              // Light mode hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* logo */}
        <div className="flex justify-center md:justify-start">
          <NavLink to="/" className="flex">
            <img
              src={!isNightMode ? lightLogo : darkLogo}
              alt="Logo"
              className="h-16 md:h-18"
            />
          </NavLink>
        </div>

        {/* desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative ${item.showDropdown ? "group" : ""} text-lg`}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-md ${isActive ? "text-red-500" : "hover:text-red-500"}`
                }
                onClick={() => handleNavItemClick(item)}
              >
                {item.name}
                {item.showDropdown && <span className="ml-1 text-xs">▼</span>}
              </NavLink>

              {item.showDropdown && (
                <div
                  className={`invisible group-hover:visible absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isNightMode
                      ? "bg-[#333] text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {item.sections.map((section, sectionIndex) => (
                    <NavLink
                      key={sectionIndex}
                      to={`${item.path}#${section.toLowerCase()}`}
                      className="block px-4 py-2 text-sm hover:text-red-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {section}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-1 lg:gap-4">
          {/* cart icon */}
          <Link to="/shoppingcart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 cursor-pointer"
              viewBox="0 -960 960 960"
              role="button"
              tabIndex="0"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
          </Link>

          {/* theme toggler */}
          <button
            onClick={toggleNightMode}
            aria-label={
              isNightMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 -960 960 960"
            >
              {isNightMode ? (
                <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
              ) : (
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden rounded-lg mt-2 shadow-xl">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-700 last:border-b-0"
              >
                <div className="flex justify-between items-center px-4">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-3 ${isActive ? "text-red-500" : ""}`
                    }
                    onClick={() => handleNavItemClick(item)}
                  >
                    {item.name}
                  </NavLink>

                  {item.showDropdown && (
                    <button
                      className="p-2"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(index);
                      }}
                      aria-label={`Toggle ${item.name} sections`}
                    >
                      {activeDropdown === index ? (
                        <span className="text-red-500">▲</span>
                      ) : (
                        <span>▼</span>
                      )}
                    </button>
                  )}
                </div>

                {item.showDropdown && activeDropdown === index && (
                  <div className="px-6 pb-2">
                    {item.sections.map((section, sectionIndex) => (
                      <NavLink
                        key={sectionIndex}
                        to={`${item.path}#${section.toLowerCase()}`}
                        className="block py-2 text-sm hover:text-red-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {section}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
