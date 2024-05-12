import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const addToCart = (item, quantity) => {
    const addItem = { ...item, quantity };

    const newCart = [...cart];

    const prevCart = newCart.find((item) => item.id === addItem.id);

    if (prevCart) {
      prevCart.quantity += quantity;
    } else {
      newCart.push(addItem);
    }
    setCart(newCart);
  };

  const quantityAtTheCart = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const removeToCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        removeToCart,
        clearCart,
        total,
        quantityAtTheCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
