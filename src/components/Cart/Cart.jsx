import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const handleClear = () => {
    clearCart();
  };

  return (
    <div className="container">
      <h1 className="title">Finalizar Compra</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Precio: ${item.price}</p>
          <p>Precio total: ${item.price * item.quantity}</p>
          <p>Cant: {item.quantity}</p>
        </div>
      ))}

      {cart.length > 0 ? (
        <>
          <h2>Total compra: ${total()}</h2>
          <button onClick={handleClear}>Vaciar Carrito</button>
          <Link className="link" to="/checkout">
            Finalizar compra
          </Link>
        </>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};
