import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/10th P PHX.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // after navigating with mobile menu, reset active dropdowns
  useEffect(() => {
    setActiveDropdown(null);
  }, [isMenuOpen, location]);

  // handle scroll to section when URL hash changes
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
      sections: ["schedule", "NoGi Jiu-Jitsu"],
      showDropdown: true,
    },
    {
      name: "Info",
      path: "/info",
      sections: ["About the Gym", "Facility", "FAQ", "Policies"],
      showDropdown: true,
    },
    {
      name: "Instructors",
      path: "/instructors",
      sections: [],
      showDropdown: false,
    },
    { name: "Contact", path: "/contact", sections: [], showDropdown: false },
  ];

  // func to toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  // func to toggle

  const toggleDropdown = (index) =>
    setActiveDropdown(activeDropdown === index ? null : index);

  const handleNavItemClick = (item) => {
    if (!item.showDropdown || window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 p-4  text-black shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-18" />
        </NavLink>

        {/* desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative ${item.showDropdown ? "group" : ""}`}
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
                <div className="invisible group-hover:visible absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.sections.map((section, sectionIndex) => (
                    <NavLink
                      key={sectionIndex}
                      to={`${item.path}#${
                        section.toLowerCase()
                        // .replace(/\s+/g, "-")
                      }`}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-red-500"
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

        {/* hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-black"
              fill="none"
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
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-black"
              fill="none"
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
                      `block py-3 ${isActive ? "text-red-500" : "text-black"}`
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
                        <span className="text-black">▼</span>
                      )}
                    </button>
                  )}
                </div>

                {item.showDropdown && activeDropdown === index && (
                  <div className=" bg-gray-100 px-6 pb-2">
                    {item.sections.map((section, sectionIndex) => (
                      <NavLink
                        key={sectionIndex}
                        to={`${item.path}#${
                          section.toLowerCase()
                          // .replace(/\s+/g, "-")
                        }`}
                        className="block py-2 text-sm text-black hover:text-white"
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
