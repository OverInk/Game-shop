import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'filter',
  initialState: {
    myfilter: 0,
  },
  reducers: {
    increment: (state) => {
      state.myfilter += 1;
    },
    decrement: (state) => {
      state.myfilter -= 1;
    },
    //меняет состояние счетчика, чтобы передать разные значения
    incrementByAmount: (state, action) => {
      state.myfilter += action.payload;
    },
    test: (state) => {
      state.myfilter = 66;
    },
  },
});

console.log(counterSlice.actions);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
