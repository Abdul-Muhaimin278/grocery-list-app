import { createSlice } from "@reduxjs/toolkit";
import { signIn, signOutAction, signUp } from "./AuthThunk";

const initialState = {
  user: null,
  uid: null,
  status: false,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "signing up";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        const { uid, email } = action.payload;
        state.status = "singup succeeded";
        state.user = email;
        state.uid = uid;
      })
      .addCase(signUp.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(signIn.pending, (state) => {
        state.status = "signing in";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const { uid, email } = action.payload;
        state.status = "signin succeeded";
        state.user = email;
        state.uid = uid;
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
        state.uid = null;
      })
      .addCase(signOutAction.rejected, (state) => {
        state.status = "failed";
      });
  },
});
