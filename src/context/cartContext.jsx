import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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

  const deleteItem = (id) => {
    const inTheCart = cart.findIndex((item) => item.id === id);
    const cart2 = [...cart];
    cart2.splice(inTheCart, 1);
    setCart(cart2);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        clearCart,
        addToCart,
        deleteItem,
        total,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
