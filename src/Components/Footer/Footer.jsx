import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/10PLogoLight.webp";
import logoDark from "../../assets/10PLogoDark.webp";
import { useTheme } from "../../ThemeContext";

const Footer = () => {
  // se theme context
  const { isNightMode } = useTheme();

  return (
    <footer className="py-8 border-gray-300 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 mb-8">
          <div className="flex flex-col gap-4">
            <NavLink to="/" className="flex-col">
              <h3 className="font-bold text-2xl">10th Planet Phoenix</h3>
            </NavLink>

            <p className="text-sm">
              Training Brazilian Jiu-Jitsu athletes in the Phoenix area since
              2010.
            </p>
            <p>Join our community of dedicated grapplers today!</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link to="/home" className="hover:text-red-600 ">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/instructors" className="hover:text-red-600 ">
                    Instructors
                  </Link>
                </li>
                <li>
                  <Link to="/classes" className="hover:text-red-600 ">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-red-600 ">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-red-600 ">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                </span>
                <a
                  className="hover:text-red-600"
                  href="https://g.co/kgs/mtHac27"
                >
                  10th Planet Phoenix
                  <br />
                  123 Main St, Phoenix
                  <br />
                  AZ 85001
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                  </svg>
                </span>
                <a
                  href="tel:+16025551234"
                  className="hover:text-red-600 transition-colors"
                >
                  (602) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                </span>
                <a
                  href="mailto:info@10thplanetphoenix.com"
                  className="hover:text-red-600 transition-colors"
                >
                  info@10thplanetphx.com
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Hours</h3>
            <div className="flex">
              <ul className="space-y-2">
                <li>Mon: 10-11 AM, 5:00-8:30 PM</li>
                <li>Tue: 5:30-7 AM, 5-8:30 PM</li>
                <li>Wed: 5:30-7 AM, 6-8:30 PM</li>
                <li>Thur: 5:30-7 AM, 6-8 PM</li>
                <li>Fri: CLOSED</li>
                <li>Sat: 10AM - 1 PM</li>
                <li>Sun: CLOSED</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 my-6">
          <a
            href="https://www.instagram.com/10thplanetphx"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="hover:fill-red-600"
            >
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/10thplanetphx/"
            className="text-gray-600 transition-colors text-2xl"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="hover:fill-red-600"
            >
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@10thplanetjjphx"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="hover:fill-red-600"
            >
              <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"></path>
            </svg>
          </a>
        </div>

        {/* gray divider */}
        <div className="border-t border-gray-200 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} 10th Planet Phoenix. All rights
            reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to={"privacy"}>
              <p className="hover:text-red-500 transition-colors">
                Privacy Policy
              </p>
            </Link>

            <a href="#terms" className="hover:text-red-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
