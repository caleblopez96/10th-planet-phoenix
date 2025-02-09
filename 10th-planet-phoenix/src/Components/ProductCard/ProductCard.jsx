import "./ProductCard.css"; // Import the new CSS file
// eslint-disable-next-line react/prop-types
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${Number(product.price).toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
