import {configureStore} from '@reduxjs/toolkit';
import useReducer from '../features/user/user';
import courseReducer from '@src/redux/features/courses/course';
import randomUser from '../features/random_user/randomUser';
export const store = configureStore({
  reducer: {
    user: useReducer,
    course: courseReducer,
    randomusers: randomUser,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
