import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

import styles from './BascketSideBar.module.css'
import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

function BascketSideBar({ state, clickHandler }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.sideBar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={()=> dispatch(checkout(state))}>CheckOut</button>
    </div>
  );
}

export default BascketSideBar;
