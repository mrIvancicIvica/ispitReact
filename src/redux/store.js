import { configureStore } from '@reduxjs/toolkit';
import gitHubUsersReducer from './gitHubUsers/gitHubUsersSlice';
import { gitHubUsersApi } from './gitHubUsers/gitHubUsersApiSlice';

export const store = configureStore({
  reducer: {
    gituser: gitHubUsersReducer,
    [gitHubUsersApi.reducerPath]: gitHubUsersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gitHubUsersApi.middleware),
});
