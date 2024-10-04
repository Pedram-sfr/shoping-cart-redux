import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const initialState = {
  itemSelected: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.itemSelected.find((item) => item.id === action.payload.id)) {
        state.itemSelected.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        ...sumProducts(state.itemSelected),
      };
    case "REMOVE_ITEM":
      const newSelectedItem = state.itemSelected.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        itemSelected: [...newSelectedItem],
        ...sumProducts(newSelectedItem),
      };
    case "INCREASE":
      const inIndex = state.itemSelected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemSelected[inIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.itemSelected),
      };
    case "DECREASE":
      const deIndex = state.itemSelected.findIndex(
        (item) => item.id === action.payload.id
      );
      state.itemSelected[deIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.itemSelected),
      };
    case "CHECKOUT":
      return {
        itemSelected: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      throw new Error("Invalid Type !");
  }
};

const CartContext = createContext();
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
