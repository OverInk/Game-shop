import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    setCategorId(state, action: PayloadAction<number>) {
      state.categorId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.categorId = Number(action.payload.categorId);
    },
  },
});

export const { setCategorId, setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;