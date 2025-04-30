import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid() {
  const allProducts = [
    {
      id: 1,
      name: "Men's 10th Planet Neon Slides",
      price: "45.00",
      image: "/10th-planet-phoenix/products/10th-planet-neon-slides.webp",
    },
    {
      id: 2,
      name: "Men's 10th Planet Slides",
      price: "45.00",
      image: "/10th-planet-phoenix/products/10th-planet-mens-slides.webp",
    },
    {
      id: 3,
      name: "10th Planet Phoenix Hoodie",
      price: "60.00",
      image: "/10th-planet-phoenix/products/10th-planet-phoenix-hoodie.webp",
    },
    {
      id: 4,
      name: "Kids Orange Ranked Shirt",
      price: 25.0,
      image:
        "/10th-planet-phoenix/products/10th-planet-kids-orange-ranked-shirt.webp",
      imageHovered:
        "/10th-planet-phoenix/products/10th-planet-kids-orange-ranked-shirt-hover.jpg",
    },
    {
      id: 5,
      name: "Kids Orange Ranked Rash Guard",
      price: "45.00",
      image: "url_to_image",
    },
    {
      id: 6,
      name: "Kids Yellow Ranked Shirt",
      price: "25.00",
      image: "url_to_image",
    },
    {
      id: 7,
      name: "Kids Yellow Ranked Rash Guard",
      price: "45.00",
      image: "url_to_image",
    },
    {
      id: 8,
      name: "Kids White Ranked Shirt",
      price: "25.00",
      image: "url_to_image",
    },
    {
      id: 9,
      name: "Kids Glow Rash Guard",
      price: "45.00",
      image: "url_to_image",
    },
    {
      id: 10,
      name: "Kids White Rash Guard",
      price: "45.00",
      image: "url_to_image",
    },
    {
      id: 11,
      name: "Vintage Phoenix T-Shirt",
      price: "30.00",
      image: "url_to_image",
    },
    {
      id: 12,
      name: "Vintage Phoenix T-Shirt",
      price: "30.00",
      image: "url_to_image",
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(4);

  function loadMoreProducts() {
    setVisibleProducts((prevState) => prevState + 4);
  }

  return (
    <div className=" my-12 p-4 product-grid-container">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {allProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts < allProducts.length && (
        <div className="button flex justify-center mt-12">
          <button
            className="mt-auto w-fit py-2 bg-gradient-to-r from-red-500 to-red-600 font-medium text-sm rounded-md transform hover:scale-102 transition-all duration-300 ease-in-out focus:outline-none shadow-sm hover:shadow-md px-8 cursor-pointer text-white"
            onClick={loadMoreProducts}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
