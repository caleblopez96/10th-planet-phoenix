// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import Navbar from "./Components/Navbar/Navbar.jsx";
// import Hero from "./Components/Hero/Hero.jsx";
// import EliteInstructors from "./Components/EliteInstructors/EliteInstructors.jsx";
// import ClassesSection from "./Components/ClassesSection/ClassesSection.jsx";
// import CTABanner from "./Components/CTABanner/CTABanner.jsx";
// import Information from "./Components/Information/Information.jsx";
// import FAQ from "./Components/FAQ/FAQ.jsx";
// import Footer from "./Components/Footer/Footer.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Navbar />
//     <Hero />
//     <EliteInstructors />
//     <ClassesSection />
//     <CTABanner />
//     <Information />
//     <FAQ />
//     <Footer />
//   </StrictMode>
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Instructors from "./pages/instructors.jsx";
import Classes from "./pages/classes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/10th-planet-phoenix">
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/10th-planet-phoenix" element={<Home />} />
        <Route path="/10th-planet-phoenix/about" element={<About />} />
        <Route path="/10th-planet-phoenix/contact" element={<Contact />} />
        <Route
          path="/10th-planet-phoenix/instructors"
          element={<Instructors />}
        />
        <Route path="/10th-planet-phoenix/classes" element={<Classes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
