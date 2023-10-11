import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	categorId: 0,
	sort: {
		nameList: 'цене',
    sortProps: 'price',
	},
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategorId(state, action) {
			state.categorId = action.payload
		}
	}
})

export const {setCategorId} = filterSlice.actions;

export default filterSlice.reducer;