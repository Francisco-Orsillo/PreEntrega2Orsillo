import CartWidget from "../CartWidget/CartWidget";
// import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        className={styles.logoNavbar}
        src="https://res.cloudinary.com/drftutaye/image/upload/v1677377994/Logo_dvssna.png"
        alt="Logo Bass Center"
      />

      <ul className={styles.listNavbar}>
        <a href="#">Bajos</a>
        <a href="#">Cuerdas</a>
        <a href="#">Amplificadores</a>
        <a href="#">Contacto</a>
      </ul>

      <CartWidget />
    </div>
  );
};
