import { useState } from "react";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="border-1 border-solid relative bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:scale-105 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={
          hovered && product.imageHovered ? product.imageHovered : product.image
        }
        alt={product.name}
        className="w-full h-64 object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out 
        ${hovered ? "opacity-40" : "opacity-0"}`}
      />
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 truncate hover:text-indigo-600 transition-colors duration-300">
          {product.name}
        </h2>
        <p className="text-xl font-semibold text-gray-700">
          ${Number(product.price).toFixed(2)}
        </p>
        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
