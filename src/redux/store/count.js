import { createSlice } from "@reduxjs/toolkit";

const count = createSlice({
  name: "count",
  initialState: { count: { count: 0, manageCount: 0 } },
  reducers: {
    stateCount: (state, action) => {
      state.count.count = action.payload;
    },
    stateManageCount: (state, action) => {
      state.count.manageCount = action.payload;
    },
  },
});
export const { stateCount, stateManageCount } = count.actions;
export default count.reducer;
