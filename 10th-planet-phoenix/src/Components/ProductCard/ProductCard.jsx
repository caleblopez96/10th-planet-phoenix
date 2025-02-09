import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={
          hovered && product.imageHovered ? product.imageHovered : product.image
        }
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <p>${Number(product.price).toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
