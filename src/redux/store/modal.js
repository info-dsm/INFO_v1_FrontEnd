import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    state: {
      modalrequest: false,
      modalmanage: false,
    },
  },
  reducers: {
    stateModal: (state, action) => {
      state.state.modalrequest = action.payload;
    },
    stateModalManage: (state, action) => {
      state.state.modalmanage = action.payload;
    },
  },
});
export const { stateModal, stateModalManage } = modal.actions;
export default modal.reducer;
