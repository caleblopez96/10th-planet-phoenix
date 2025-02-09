import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "../../Components/ProductGrid/ProductGrid.css";

function ProductGrid() {
  const allProducts = [
    {
      id: 1,
      name: "Men's 10th Planet Neon Slides",
      price: "45.00",
      image: "url_to_image",
    },
    {
      id: 2,
      name: "Men's 10th Planet Slides",
      price: "45.00",
      image: "url_to_image",
    },
    {
      id: 3,
      name: "Hoodie",
      price: "60.00",
      image: "url_to_image",
    },
    {
      id: 4,
      name: "Kids Orange Ranked Shirt",
      price: 25.0,
      image: "url_to_image",
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
  ];

  // State to control how many products to display
  const [visibleProducts, setVisibleProducts] = useState(4); // Initial number of products (e.g., 8)

  // Load more products
  const loadMoreProducts = () => {
    setVisibleProducts((prevState) => prevState + 4); // Load 8 more each time
  };

  return (
    <div className="p-4 product-grid-container">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleProducts < allProducts.length && (
        <button onClick={loadMoreProducts}>Load More</button>
      )}
    </div>
  );
}

export default ProductGrid;
