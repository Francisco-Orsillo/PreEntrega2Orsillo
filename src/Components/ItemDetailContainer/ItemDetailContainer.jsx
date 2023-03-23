import React from "react";

import { useParams } from "react-router-dom";
import { products } from "../../productsMock";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    console.log(`se agregó al carrito ${cantidad} productos`);
  };

  return (
    <div>
      <h1> {productSelected.title} </h1>
      <img src={productSelected.img} alt="" />
    </div>
  );
};

export default ItemDetailContainer;
