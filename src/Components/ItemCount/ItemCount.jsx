import useState from "react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h1>ItemCount</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Agregar</button>
      <button onClick={restar}>Quitar</button>
    </div>
  );
};

export default ItemCount;
