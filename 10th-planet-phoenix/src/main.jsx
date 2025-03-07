import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ProductGrid from "./Components/ProductGrid/ProductGrid.jsx";
import Hero from "./Components/Hero/Hero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero />
    <ProductGrid />
  </StrictMode>
);
