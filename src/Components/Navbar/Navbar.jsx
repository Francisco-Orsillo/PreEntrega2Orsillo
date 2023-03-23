import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
// import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Link to="/">
        <img
          className={styles.logoNavbar}
          src="https://res.cloudinary.com/drftutaye/image/upload/v1677377994/Logo_dvssna.png"
          alt="Logo Bass Center"
        />
      </Link>

      <ul className={styles.listNavbar}>
        <Link to="/">Todos</Link>
        <Link to="/category/pasivos">Bajos Pasivos</Link>
        <Link to="/category/activos">Bajos Activos</Link>
      </ul>

      <CartWidget />
    </div>
  );
};
