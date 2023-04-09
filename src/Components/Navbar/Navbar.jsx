import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  //const [cat, setCat] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return { ...category.data(), id: category.id };
      });
      setCategoryList(arrayCategories);

      // const firstCategory =
      //   categoryList.length > 0 &&
      //   categoryList.find((e) => e.title === "Todos");
      // const otherCategory =
      //   categoryList.length > 0 &&
      //   categoryList.filter((e) => e.title !== "Todos");
      //  if (categoryList.length > 0) {
      //    setCat([firstCategory, ...otherCategory]);
      //  }
    });
  }, []);

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
        {categoryList.map((category) => {
          return (
            <Link key={category.id} to={category.path}>
              {category.title}
            </Link>
          );
        })}
      </ul>

      <CartWidget />
    </div>
  );
};
