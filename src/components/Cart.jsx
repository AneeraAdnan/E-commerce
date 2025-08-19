import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, cartTotal, cartCount, incrementQuantity, decrementQuantity } = useCart();

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold"> Cart ({cartCount} items)</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center my-2">
          <span className="w-40">{item.title}</span>
          <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
          <div className="flex items-center gap-2">
            <button 
              onClick={() => decrementQuantity(item.id)} 
              className="bg-gray-300 px-2 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button 
              onClick={() => incrementQuantity(item.id)} 
              className="bg-gray-300 px-2 rounded"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-800 text-white  px-4 py-2 rounded">
           remove 
          </button>
        </div>
      ))}
      <h3 className="mt-4 font-bold">Total: ${cartTotal.toFixed(2)}</h3>
    </div>
  );
}
