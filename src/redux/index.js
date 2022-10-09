import { configureStore } from "@reduxjs/toolkit";
import modal from "./store/modal";
import selectValue from "./store/selectValue";
export const store = configureStore({
  reducer: {
    modal: modal,
    selectValue: selectValue,
  },
});
