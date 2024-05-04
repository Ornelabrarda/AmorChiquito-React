import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  const handleClear = () => {
    clearCart();
  };

  return (
    <div className="container">
      <h1 className="cart-title">Carrito</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Precio unit. $ {item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio total: $ {item.price * item.quantity}</p>
        </div>
      ))}
      {cart.length > 0 ? (
        <>
          <h2>Total: ${total}</h2>
          <button onClick={handleClear}>Vaciar carrito</button>
        </>
      ) : (
        <h2>Tu carrito está vacio</h2>
      )}
    </div>
  );
};
