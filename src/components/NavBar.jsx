import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
      <Link to="/" className="text-lg font-bold">My Store</Link>

      <Link to="/cart" className="relative flex items-center gap-2">
        <span className="text-2xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-xs px-1 rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
}
