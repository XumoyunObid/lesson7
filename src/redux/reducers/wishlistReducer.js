import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("product") || {
  products: [],
};

const wishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleAdd: (state, action) => {
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
    toggleRemove: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});

export default wishlistReducer.reducer;
export const { toggleAdd, toggleRemove } =
wishlistReducer.actions;
