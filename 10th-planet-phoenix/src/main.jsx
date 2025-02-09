import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ProductGrid from "./Components/ProductGrid/ProductGrid.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductGrid />
  </StrictMode>
);
