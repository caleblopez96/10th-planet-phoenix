function ProductCard({ product }) {
  return (
    <div className="h-[400px] w-full border border-white/10 rounded-2xl text-center p-6 bg-black/10 shadow-2xl overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out 
          `}
        />
      </div>

      {/* product information */}
      <div className="mt-4 flex-1 flex flex-col">
        <h2 className="text-sm transition-colors duration-300">
          {product.name}
        </h2>
        <p className="text-base font-semibold mt-2">
          ${Number(product.price).toFixed(2)}
        </p>

        <button className="mt-auto w-full py-2 bg-gradient-to-r from-red-500 to-red-600 font-medium text-sm rounded-md transform transition-all duration-300 ease-in-out focus:outline-none shadow-sm cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
