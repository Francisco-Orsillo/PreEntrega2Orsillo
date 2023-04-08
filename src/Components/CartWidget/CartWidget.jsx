import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div>
        <span>{total}</span>
        <MdOutlineShoppingCart color="white" size="4em" />
      </div>
    </Link>
  );
};

export default CartWidget;
