import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/filterSlice';

//configureStore- создает хранилище из библиотеки redax toolkit
export default configureStore({
  //Само Redux хранилище - {}, там ничего нет, значит хранилище пустое
  //counter-само хранилищеб таких counter может быть много с своим хранилищем
  //с разными редюсами (reducer)
  reducer: {
    counter: counterReducer,
  },
});

// console.log(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
