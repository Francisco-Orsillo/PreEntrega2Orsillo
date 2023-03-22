import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
        <MdOutlineShoppingCart color="white" size="4em" />
      </div>
    </Link>
  );
};

export default CartWidget;
