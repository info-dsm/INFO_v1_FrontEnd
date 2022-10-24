import { configureStore } from "@reduxjs/toolkit";
import modal from "./store/modal";
import selectValue from "./store/selectValue";
import count from "./store/count";
export const store = configureStore({
  reducer: {
    modal: modal,
    selectValue: selectValue,
    count: count,
  },
});
