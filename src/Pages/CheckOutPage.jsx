import BascketCard from "../components/BascketCard";
import EmptyCart from "../assets/empty-cart.svg";
import BascketSideBar from "../components/BascketSideBar";

import styles from "./CheckOutPages.module.css";
import { useDispatch, useSelector } from "react-redux";

function CheckOutPage() {
  const state = useSelector((store) => store.cart);
  if (!state.itemCounter) {
    return (
      <div className="notFound">
        <img src={EmptyCart} alt="" />
        <p>سبد خرید شما خالی است!</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BascketSideBar state={state} />
      <div className={styles.products}>
        {state.itemSelected.map((product) => (
          <BascketCard
            key={product.id}
            data={product}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckOutPage;
