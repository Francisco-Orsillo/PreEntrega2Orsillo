const ProductCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.price}</h2>
    </div>
  );
};

export default ProductCard;
