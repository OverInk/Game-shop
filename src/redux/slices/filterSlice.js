import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categorId: 0,
  sort: {
    nameList: 'цене',
    sortProps: 'price',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategorId(state, action) {
      console.log('action setCategotId', action);
      state.categorId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategorId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
