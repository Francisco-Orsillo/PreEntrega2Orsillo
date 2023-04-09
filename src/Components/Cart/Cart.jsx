import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const totalPrice = getTotalPrice();

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "Desea eliminar los productos del carrito?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Productos removidos", "", "success");
        clearCart();
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>Gracias por su compra</h2>
        <h4>Numero de comprobante: {orderId}</h4>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  return (
    <div>
      {" "}
      {!showForm ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {cart.map((elemento) => {
            return (
              <div style={{ border: "2px solid red" }} key={elemento.id}>
                <h2>{elemento.title}</h2>
                <img src={elemento.img} alt="" style={{ width: "250px" }} />
                <h2>cantidad: {elemento.quantity}</h2>
                <h2>${elemento.price}</h2>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(elemento.id)}
                >
                  Eliminar
                </Button>
              </div>
            );
          })}

          <h2>Precio Total: ${totalPrice}</h2>

          {cart.length > 0 && (
            <div>
              <Button variant="contained" onClick={() => setShowForm(true)}>
                Finalizar
              </Button>
              <Button variant="contained" onClick={clear}>
                Vaciar Carrito
              </Button>
            </div>
          )}
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
