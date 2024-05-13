import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../main";
import "./Checkout.css";

export const Checkout = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const order = {
      cosumer: data,
      item: cart,
      total: total(),
    };
    console.log(order);

    const orderRef = collection(db, "pedidos");

    addDoc(orderRef, order).then((doc) => {
      setOrderId(doc.id);
      clearCart();
    });
  };

  if (orderId) {
    return (
      <>
        <h1 className="compra">Gracias por su compra!</h1>
        <p className="pedido">Su número de pedido es: {orderId}</p>
      </>
    );
  }

  return (
    <div className="container">
      <h1 className="main-title">Finalizar compra</h1>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />

        <button type="submit">comprar</button>
      </form>
    </div>
  );
};
