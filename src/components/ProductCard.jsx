import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="font-bold">{product.title}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}

