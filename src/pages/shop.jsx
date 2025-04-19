import Hero2 from "../Components/Hero/Hero2";
import ProductGrid from "../Components/ProductGrid/ProductGrid";

import eddieB from "../Components/Information/eddie-bravo.jpg";

export default function shop() {
  return (
    <>
      <Hero2 imageOne={eddieB} imageTwo={eddieB} content={"Shop"} />
      <div className="max-w-[1200px] mx-auto px-4">
        <ProductGrid />
      </div>
    </>
  );
}
