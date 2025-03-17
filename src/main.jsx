import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Navbar from "./Components/Navbar/Navbar.jsx";
import ProductGrid from "./Components/ProductGrid/ProductGrid.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import EliteInstructors from "./Components/EliteInstructors/EliteInstructors.jsx";
import ClassesSection from "./Components/ClassesSection/ClassesSection.jsx";
import CTABanner from "./Components/CTABanner/CTABanner.jsx";
import Information from "./Components/Information/Information.jsx";
import FAQ from "./Components/FAQ/FAQ.jsx";
import Footer from "./Components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <EliteInstructors />
    <ClassesSection />
    <CTABanner />
    <Information />
    <FAQ />
    <Footer />
  </StrictMode>
);
