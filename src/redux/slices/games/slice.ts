import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { PizzaSliceState, Status } from './types';
import { fetchGamesAsync } from './asyncActions';

export const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGamesAsync.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchGamesAsync.fulfilled, (state, action) => {
      console.log(action, 'fullfilled');
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchGamesAsync.rejected, (state, action) => {
      console.log(action, 'regected');
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const selectGamesData = (state: RootState) => state.games;

export const { setItems } = gamesSlice.actions;

export default gamesSlice.reducer;
