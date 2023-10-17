import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
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
      state.categorId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.pageCount = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categorId = Number(action.payload.categorId);
    },
  },
});

export const { setCategorId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
