import "./itemCount.css";
import { useState } from "react";

export const ItemCount = ({ add, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleCart = () => {
    add(quantity);
    setQuantity(1);
  };

  const handleAdd = () => {
    quantity < stock && setQuantity((prev) => prev + 1);
  };

  const handleRest = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  return (
    <>
      <div className="item-count">
        <button onClick={handleRest}>-</button>
        <p>{quantity}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={handleCart}>
        Agregar al carrito
      </button>
    </>
  );
};
