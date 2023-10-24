import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
// ...
/* eslint-disable no-underscore-dangle */

export const store = configureStore({
    reducer: {
        app: appReducer
    }
});
/* eslint-enable */
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
