import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import { storageMiddleWare } from "./reducers/middleware";

import { saveState } from "../config/storage";
import wishlistReducer from './reducers/wishlistReducer';

export const store = configureStore({
  reducer: {
    productReducer,
    wishlistReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleWare.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().productReducer);
  saveState("wishlist", store.getState().wishlistReducer);
});
