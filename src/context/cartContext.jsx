import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const clearCart = () => setCart([]);

  const AddToCart = (item, quantity) => {
    const addItem = { ...item, quantity };

    const newCart = [...cart];

    const prevCart = newCart.find((item) => item.id === addItem.id);

    if (prevCart) {
      prevCart.quantity += quantity;
    } else {
      newCart.push(addItem);
    }
    setCart(newCart);
    console.log(newCart);
  };

  const removeToCart = () => {};

  return (
    <CartContext.Provider value={{ removeToCart, clearCart, AddToCart }} />
  );
};
