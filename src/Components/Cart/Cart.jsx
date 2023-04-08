import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  const totalPrice = getTotalPrice();

  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      {cart.map((elemento) => {
        return (
          <div style={{ border: "2px solid red" }} key={elemento.id}>
            <h2>{elemento.title}</h2>
            <img src={elemento.img} alt="" style={{ width: "250px" }} />
            <h2>cantidad: {elemento.quantity}</h2>
            <h2>${elemento.price}</h2>
          </div>
        );
      })}

      <h2>Precio Total: ${totalPrice}</h2>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
