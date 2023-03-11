import React from "react";
import styles from "./Item.module.css";

const Item = ({ element }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={element.img} alt="" />
      <h2>{element.title}</h2>
      <h3>{element.price}</h3>
    </div>
  );
};

export default Item;
