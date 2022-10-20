import { createSlice } from "@reduxjs/toolkit";

const count = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    stateCount: (state, action) => {
      state.count = action.payload;
    },
  },
});
export const { stateCount } = count.actions;
export default count.reducer;
