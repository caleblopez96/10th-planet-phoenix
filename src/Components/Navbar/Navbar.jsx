import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/10th-planet-phoenix.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    {
      name: "Home",
      path: "/",
      sections: [],
      showDropdown: false,
    },
    {
      name: "Classes",
      path: "/classes",
      sections: ["Schedule", "No-Gi Grappling", "Kids Classes"],
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
    {
      name: "Membership",
      path: "/membership",
      sections: [],
      showDropdown: false,
    },
    {
      name: "Contact",
      path: "/contact",
      sections: [],
      showDropdown: false,
    },
  ];

  // toggle dropdown for mobile
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="fixed w-full z-50 p-4 transition-all bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-18" />
        </NavLink>

        {/* nav for lg */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`relative ${item.showDropdown ? "group" : ""}`}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 text-md"
                    : "cursor-pointer hover:text-red-500 text-md"
                }
              >
                {item.name}
                {item.showDropdown && <span className="ml-1 text-xs">▼</span>}
              </NavLink>

              {/* desktop dropdown */}
              {item.showDropdown && (
                <div className="invisible group-hover:visible absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.sections.map((section, sectionIndex) => (
                    <a
                      key={sectionIndex}
                      href={`${item.path}#${section
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-red-500"
                    >
                      {section}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* hambruger */}
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
          <ul className="flex flex-col mt-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="w-full border-b border-gray-700 last:border-b-0"
              >
                <div className="flex justify-between items-center px-4">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-500 block py-3"
                        : "cursor-pointer block py-3"
                    }
                    onClick={() => !item.showDropdown && toggleMenu()}
                  >
                    {item.name}
                  </NavLink>

                  {/* show dropdown buttons for items that have showDropdown only */}
                  {item.showDropdown && (
                    <button
                      className="p-2 text-gray-300 hover:text-white"
                      onClick={() => toggleDropdown(index)}
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

                {/* sm dropdown content */}
                {item.showDropdown && activeDropdown === index && (
                  <div className="bg-gray-700 py-2 px-6 mb-2">
                    {item.sections.map((section, sectionIndex) => (
                      <a
                        key={sectionIndex}
                        href={`${item.path}#${section
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block text-sm py-1 text-gray-200 hover:text-white"
                        onClick={toggleMenu}
                      >
                        {section}
                      </a>
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
