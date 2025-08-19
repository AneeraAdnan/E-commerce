import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);


  const createSlug = (title, id) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + `-${id}`;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <Link 
          key={product.id} 
          to={`/product/${createSlug(product.title, product.id)}`}
          className="border p-4 rounded block hover:shadow-lg transition"
        >
          <img src={product.image} alt={product.title} className="h-40 mx-auto" />
          <h3 className="font-bold">{product.title}</h3>
          <p>${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
