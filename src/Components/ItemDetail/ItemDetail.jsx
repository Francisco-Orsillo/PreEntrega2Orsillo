import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div>
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
    </div>
  );
};

export default ItemDetail;
