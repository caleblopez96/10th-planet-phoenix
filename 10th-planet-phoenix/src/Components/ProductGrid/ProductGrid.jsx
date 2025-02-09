import "../../Components/ProductGrid/ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid() {
  const products = [
    {
      id: 1,
      name: `Men's 10th Planet Neon Slides`,
      price: 45.0,
      image: "products/neon-slides.webp",
    },
    {
      id: 2,
      name: `Men's 10th Planet Slides`,
      price: "45.00",
      image: "products/mens-10th-planet-slides.webp",
    },
    {
      id: 3,
      name: "10th Planet Phoenix Hoodie",
      price: "60.00",
      image: "products/10th-planet-phoenix-hoodie.webp",
    },
    {
      id: 4,
      name: "Kids Orange Ranked Shirt",
      price: 25.0,
      image: "products/10th-planet-kids-orange-ranked-shirt.webp",
    },
    {
      id: 5,
      name: "Kids Orange Ranked Rash Guard",
      price: "45.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Kids Yellow Ranked Shirt",
      price: "25.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Kids Yellow Ranked Rash Guard",
      price: "45.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Kids White Ranked Shirt",
      price: "25.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Kids Glow Rash Guard",
      price: "45.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Kids White Rash Guard",
      price: "45.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Vintage Phoenix T-Shirt",
      price: "30.00",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-4 product-grid-container">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
