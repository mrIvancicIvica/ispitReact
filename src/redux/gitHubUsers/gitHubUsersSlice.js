import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: 'reduxjs',
};

export const gitHubUsersSlice = createSlice({
  name: 'gituser',
  initialState,
  reducers: {
    findUser: (state, action) => {
      state.users = action.payload;
    },
    getRepo: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { findUser } = gitHubUsersSlice.actions;
export default gitHubUsersSlice.reducer;
