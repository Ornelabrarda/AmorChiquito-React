import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  const handleClear = () => {
    clearCart();
  };

  return (
    <div className="container">
      <h1 className="cart-title">Carrito</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{cart.title}</h2>
          <p>Precio unit. ${cart.price}</p>
          <p>Cantidad: {cart.quantity}</p>
          <p>Precio total: $ {cart.price * cart.quantity}</p>
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
      ;
    </div>
  );
};
