import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";

import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const state = useSelector(store => store.cart)
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Pedram's Shop</Link>
        <Link to="checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Pedram Safari with ❤</p>
      </footer>
    </>
  );
}

export default Layout;
