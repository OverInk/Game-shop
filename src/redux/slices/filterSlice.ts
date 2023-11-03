import { createSlice } from '@reduxjs/toolkit';

type Sort = {
  nameList: string;
  sortProps: 'price' | 'title' | 'raiting';
};

interface FilterSliceState {
  searchValue: string;
  categorId: number;
  currentPage: number;
  sort: Sort;
}

export const initialState: FilterSliceState = {
  searchValue: '',
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categorId = Number(action.payload.categorId);
    },
  },
});

export const { setCategorId, setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
