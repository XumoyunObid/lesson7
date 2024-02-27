import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import {
  addProduct,
  removeProduct,
  setCount,
  toggleAmmount,
  totalPrice,
} from "./productReducer.js";

const storageMiddleWare = createListenerMiddleware();

storageMiddleWare.startListening({
  matcher: isAnyOf(addProduct, removeProduct, toggleAmmount),
  effect: (_, api) => {
    api.dispatch(totalPrice());
    api.dispatch(setCount());
  },
});

export { storageMiddleWare };
