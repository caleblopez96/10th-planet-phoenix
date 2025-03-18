import logo from "../../assets/logo/10th-planet-phoenix.png";

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8 border-gray-300 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col">
            <a href="#home" className="mb-4">
              <img src={logo} alt="10th Planet Phoenix Logo" className="h-16" />
            </a>
            <p className="text-white mb-4">
              Training Brazilian Jiu-Jitsu athletes in the Phoenix area since
              2010. Join our community of dedicated grapplers today!
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#instructors"
                  className="hover:text-blue-500 transition-colors"
                >
                  Instructors
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="hover:text-blue-500 transition-colors"
                >
                  Classes
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Main St, Phoenix, AZ 85001</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a
                  href="tel:+16025551234"
                  className="hover:text-blue-500 transition-colors"
                >
                  (602) 555-1234
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a
                  href="mailto:info@10thplanetphoenix.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  info@10thplanetphoenix.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div>
                  <p>Monday - Friday: 6:00am - 9:00pm</p>
                  <p>Saturday: 9:00am - 2:00pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-6 my-6">
          <a
            href="#instagram"
            className="text-gray-600 hover:text-blue-500 transition-colors text-2xl"
            aria-label="Instagram"
          >
            📸
          </a>
          <a
            href="#facebook"
            className="text-gray-600 hover:text-blue-500 transition-colors text-2xl"
            aria-label="Facebook"
          >
            👍
          </a>
          <a
            href="#youtube"
            className="text-gray-600 hover:text-blue-500 transition-colors text-2xl"
            aria-label="YouTube"
          >
            🎬
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-4">
          <p className="text-gray-500 text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} 10th Planet Phoenix. All rights
            reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a
              href="#privacy"
              className="hover:text-blue-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
