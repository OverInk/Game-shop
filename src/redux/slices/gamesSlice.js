import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGamesAsync = createAsyncThunk('games/fetchGamesStatus', async (params, thunkAPI) => {
  const { sortBy, categorId, currentPage } = params;
  const { data } = await axios.get(
    `https://6516b50209e3260018ca2dff.mockapi.io/items?page=${currentPage}&limit=3${
      categorId > 0 ? `category=${categorId}` : ''
    }&sortBy=${sortBy}&order=desc`,
  );

  if (data.length === 0) {
	return thunkAPI.rejectWithValue('Игры пустые');
  }

  return thunkAPI.fulfillWithValue(data)  ;
});

export const initialState = {
  items: [],
  status: 'loading', //loading | success | error
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
    builder.addCase(fetchGamesAsync.pending, (state, action) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchGamesAsync.fulfilled, (state, action) => {
		console.log(action, 'fullfilled')
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchGamesAsync.rejected, (state, action) => {
		console.log(action, 'regected')
      state.status = 'error';
      state.items = [];
    });
  },
});

export const { setItems } = gamesSlice.actions;

export default gamesSlice.reducer;
