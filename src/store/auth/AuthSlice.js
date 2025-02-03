import { createSlice } from "@reduxjs/toolkit";
import { signIn, signOutAction, signUp } from "./AuthThunk";

const initialState = {
  user: null,
  status: false,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "signing up";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "singup succeeded";
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(signIn.pending, (state) => {
        state.status = "signing in";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "signin succeeded";
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(signOutAction.pending, (state) => {
        state.status = "signing out";
      })
      .addCase(signOutAction.fulfilled, (state) => {
        state.status = "signout succeeded";
        state.user = null;
      })
      .addCase(signOutAction.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { logout } = authReducer.actions;
