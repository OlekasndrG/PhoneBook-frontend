import {
  getCurrentUser,
  logOutUser,
  loginUser,
  registerUser,
  updateUser,
} from './AuthOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: '', email: null, avatarURL: null, subscription: 'starter' },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGoogleAuth(state, action) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(logOutUser.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })

      .addCase(getCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.user.avatarURL = action.payload.avatarURL;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isFetchingCurrentUser = false;
        state.isLoggedIn = false;
      })

      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
const authReducer = authSlice.reducer;
export const { setGoogleAuth } = authSlice.actions;
export default authReducer;
