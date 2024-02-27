import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    totalPrice: (state) => {
      const price = state.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.userPrice,
        0
      );
      return { ...state, totalPrice: price };
    },
    setCount: (state) => {
      const count = state.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.userCount,
        0
      );
      return { ...state, count: count };
    },
    addProduct: (state, action) => {
      const idf = state.products.find((item) => item.id === action.payload.id);
      if (!idf) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: 1,
              userPrice: action.payload.price,
            },
          ],
        };
      }
      return state;
    },
    removeProduct: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    toggleAmmount: (state, action) => {
      if (action.payload.type === "ADD") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount + 1,
              userPrice: (item.userCount + 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
      if (action.payload.type === "REMOVE") {
        const newProducts = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount - 1,
              userPrice: (item.userCount - 1) * item.price,
            };
          }
          return item;
        });
        return { ...state, products: newProducts };
      }
    },
  },
});

export default productReducer.reducer;
export const { addProduct, removeProduct, toggleAmmount, totalPrice, setCount } =
  productReducer.actions;
