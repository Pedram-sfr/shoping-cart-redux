import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helper/helper";

const initialState = {
  itemSelected: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.itemSelected.find((i) => i.id === action.payload.id)) {
        state.itemSelected.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.itemSelected);
        state.itemCounter = sumQuantity(state.itemSelected);
        state.checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItem = state.itemSelected.filter(
        (i) => i.id !== action.payload.id
      );
      state.itemSelected = newSelectedItem;
      state.total = sumPrice(state.itemSelected);
      state.itemCounter = sumQuantity(state.itemSelected);
      state.checkout = false;
    },
    increase: (state, action) => {
      const increaseIndex = state.itemSelected.findIndex(
        (i) => i.id === action.payload.id
      );
      state.itemSelected[increaseIndex].quantity++;
      state.total = sumPrice(state.itemSelected);
      state.itemCounter = sumQuantity(state.itemSelected);
      state.checkout = false;
    },
    decrease: (state, action) => {
      const decreaseIndex = state.itemSelected.findIndex(
        (i) => i.id === action.payload.id
      );
      state.itemSelected[decreaseIndex].quantity--;
      state.total = sumPrice(state.itemSelected);
      state.itemCounter = sumQuantity(state.itemSelected);
      state.checkout = false;
    },
    checkout: (state) => {
      state.itemSelected = [];
      state.total = 0;
      state.itemCounter = 0;
      state.checkout = true;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
