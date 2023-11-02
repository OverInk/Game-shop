import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import games from './slices/gamesSlice';

//configureStore- создает хранилище из библиотеки redax toolkit
export const store = configureStore({
  //Само Redux хранилище - {}, там ничего нет, значит хранилище пустое
  //counter-само хранилищеб таких counter может быть много с своим хранилищем
  //с разными редюсами (reducer)
  reducer: {
    filter,
    cart,
    games,
  },
});

// console.log(store,'REDUX' )

// console.log(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
