import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchGamesArgs, Pizza } from './types';
import axios from 'axios';

export const fetchGamesAsync = createAsyncThunk(
  'games/fetchGamesStatus',
  async (params: FetchGamesArgs, thunkAPI) => {
    const { sortBy, categorId, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://6516b50209e3260018ca2dff.mockapi.io/items?page=${currentPage}&limit=3${`category=${categorId}`}&sortBy=${sortBy}&order=desc`,
    );

    if (data.length === 0) {
      return thunkAPI.rejectWithValue('Игры пустые');
    }

    return thunkAPI.fulfillWithValue(data);
  },
);
