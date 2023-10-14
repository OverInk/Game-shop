import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categorId: 0,
  currentPage: 1,
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategorId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
