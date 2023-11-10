import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../../utils/getCartFromLocalStorage';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';
import { CartItem, CartSliceState } from './types';

const { items, totalPrice } = getCartFromLS();

export const initialState: CartSliceState = {
  totalPrice: totalPrice,
  items: items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //  addItem(state, action) {
    //    state.items.push(action.payload);
    //    state.totalPrice = state.items.reduce((sum, object) => {
    //      return object.price + sum;
    //    }, 0);
    //  },
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((object) => object.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });

        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    //  plusItem(state, action) {
    // 	const findItem = state.items.find((object) => object.id === action.payload.id);

    // 	if (findItem) {
    // 		findItem.count++;
    // 	}
    //  },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((object) => object.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((object) => object.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
