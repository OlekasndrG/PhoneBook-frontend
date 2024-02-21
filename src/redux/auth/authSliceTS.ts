import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../components/types/UserTypes";
import {
  getCurrentUser,
  logOutUser,
  loginUser,
  registerUser,
  updateUser,
} from "./authOperationsTS";

type UserAuthReducerType = {
  user: User | null;
  token: string | null;
  isLoggedIn?: boolean;
  isFetchingCurrentUser?: boolean;
  error?: string | null;
  isLoading?: boolean;
};
const initialState: UserAuthReducerType = {
  user: { name: "", email: null, avatarURL: null, subscription: "starter" },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setGoogleAuth(state, action: PayloadAction<UserAuthReducerType>) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action: any) => {
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
      .addCase(loginUser.rejected, (state, action: any) => {
        state.user = null;
        state.error = action.payload;
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.pending, (state, action: any) => {
        state.isLoading = true;
      })

      .addCase(logOutUser.fulfilled, (state) => {
        state.user = { name: null, email: null, avatarURL: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })

      .addCase(getCurrentUser.pending, (state, action: any) => {
        state.isFetchingCurrentUser = true;
        state.isLoading = true;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action: any) => {
        state.user = action.payload;
        // state.user.avatarURL = action.payload.avatarURL;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, action: any) => {
        state.isFetchingCurrentUser = false;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.payload ?? action.error;
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
      .addCase(updateUser.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
const authReducer = authSlice.reducer;
export const { setGoogleAuth } = authSlice.actions;
export default authReducer;
