import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let producto = { ...productSelected, quantity: cantidad };

    agregarAlCarrito(producto);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al Carrito",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(`se agregó al carrito ${cantidad} productos`);
  };

  let quantity = getQuantityById(Number(id));

  return (
    <div>
      <h1> {productSelected.title} </h1>
      <h2> {productSelected.price}</h2>
      <img src={productSelected.img} alt="" />
      <ItemCount
        stock={productSelected.stock}
        onAdd={onAdd}
        initial={quantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
