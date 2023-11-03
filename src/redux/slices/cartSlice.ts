import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imgUrl: string;
  type: string;
  sixe: number;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

export const initialState: CartSliceState = {
  totalPrice: 0,
  items: [],
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

        state.totalPrice = state.items.reduce((sum, object) => {
          return object.price * object.count + sum;
        }, 0);
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

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((object) => object.id === id);

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
