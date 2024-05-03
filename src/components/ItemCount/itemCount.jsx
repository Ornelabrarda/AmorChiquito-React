import { CartContext } from "../../context/cartContext";
import "./itemCount.css";
import { useContext, useState } from "react";

export const ItemCount = (item) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleSumar = () => {
    setQuantity(quantity + 1);
  };

  const handleRestar = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <p>{quantity}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button
        className="agregar-al-carrito"
        onClick={() => {
          addToCart(item, quantity);
        }}
      >
        Agregar al carrito
      </button>
    </>
  );
};
