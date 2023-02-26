import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <Logo />

      <ul className={styles.listNavbar}>
        <li>Guitarras</li>
        <li>Bajos</li>
        <li>Amplificadores</li>
      </ul>

      <CartWidget />
    </div>
  );
};
