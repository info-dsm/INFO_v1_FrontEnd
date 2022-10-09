import { configureStore } from "@reduxjs/toolkit";
import modal from "./store/modal";
export const store = configureStore({
  reducer: {
    modal: modal,
  },
});
