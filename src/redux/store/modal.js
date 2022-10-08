import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    openModal: (state, action) => {
      state = true;
    },
    closeModal: (state, action) => {
      state = false;
    },
  },
});
export const { openModal, closeModal } = modal.actions;
export default modal;
