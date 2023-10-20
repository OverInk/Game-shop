import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
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
    addItem(state, action) {
      const findItem = state.items.find((object) => object.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });

		  state.totalPrice = state.items.reduce((sum, object) => {
			  return (object.price * object.count) + sum;
		   }, 0);
      }
    },
	//  plusItem(state, action) {
	// 	const findItem = state.items.find((object) => object.id === action.payload.id);

	// 	if (findItem) {
	// 		findItem.count++;
	// 	}
	//  }, 
	 minusItem(state, action) {
		const findItem = state.items.find((object) => object.id === action.payload.id);

		if (findItem) {
			findItem.count--;
		}
		
	 },
    removeItem(state, action) {
      state.items = state.items.filter((object) => object.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;