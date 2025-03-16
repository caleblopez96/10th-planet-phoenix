import { useState } from "react";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-102 overflow-hidden border border-gray-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          src={
            hovered && product.imageHovered
              ? product.imageHovered
              : product.image
          }
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out 
          ${hovered ? "opacity-40" : "opacity-0"}`}
        />
      </div>
      <div className="p-4 space-y-2 bg-white">
        <h2 className="text-lg font-bold text-gray-900 truncate hover:text-indigo-600 transition-colors duration-300">
          {product.name}
        </h2>
        <p className="text-base font-semibold text-gray-700">
          ${Number(product.price).toFixed(2)}
        </p>
        <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm rounded-md transform hover:scale-102 transition-all duration-300 ease-in-out focus:outline-none shadow-sm hover:shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
