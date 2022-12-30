import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    value2:0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increment2: (state) => {
      state.value2 += 1;
    },
    decrement2: (state) => {
      state.value2 -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  //自動で同じ名前のAction Creatorが作成される。
});

export const { increment, decrement,increment2,decrement2, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
