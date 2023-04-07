import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h1>ItemCount</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Agregar</button>
      <button onClick={restar}>Quitar</button>
      <button onClick={() => onAdd(contador)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
