import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext.jsx";

// UI Component Imports
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/home.jsx";
import Info from "./pages/info.jsx";
import Contact from "./pages/contact.jsx";
import Instructors from "./pages/instructors.jsx";
import Classes from "./pages/classes.jsx";
import Shop from "./pages/shop.jsx";
import Privacy from "./pages/privacy.jsx";
import ShoppingCart from "./pages/shoppingcart";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter basename="/10th-planet-phoenix/">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/info" element={<Info />} />
        <Route path="/instructors" element={<Instructors />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* <Route path="/shoppingcart" element={<ShoppingCart />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);
