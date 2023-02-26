const ProductCard = ({ title, price = "Precio no disponible" }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductCard;
