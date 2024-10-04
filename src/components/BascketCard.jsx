import React from "react";
import { shortText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

import styles from "./BascketCard.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

function BascketCard({ data, clickHandler }) {
  const { image, title, price, quantity } = data;
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortText(title)}</p>
      <span>{price}$</span>
      <span>{price * quantity}$</span>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))
          }>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BascketCard;
