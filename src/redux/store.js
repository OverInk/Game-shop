import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/filterSlice';

export const store = configureStore({
	//Само Redux хранилище - {}, там ничего нет, значит хранилище пустое
  reducer: {
	counter: counterReducer,
  },
}

)

// console.log(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch