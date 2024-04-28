/* eslint-disable react/prop-types */
import "./itemCount.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const ItemCount = () => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useContext(CartContext);

  const handleSumar = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleRestar = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  return (
    <>
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <p>{quantity}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  );
};
