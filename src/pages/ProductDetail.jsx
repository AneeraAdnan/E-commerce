import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { slug } = useParams();
  const id = slug.split("-").pop(); 
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto flex gap-8">
      <img src={product.image} alt={product.title} className="w-80" />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="mb-4">{product.description}</p>
        <h2 className="text-xl font-semibold mb-4">${product.price}</h2>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-900 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
