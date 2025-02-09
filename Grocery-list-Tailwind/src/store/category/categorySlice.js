import { createSlice } from "@reduxjs/toolkit";
import {
  addCategory,
  addList,
  fetchCategory,
  fetchLists,
  removeCategory,
  removeList,
} from "./categoryThunk";

const initialState = {
  categories: [],
  lists: [],
  status: "idle",
};
export const categoryReducer = createSlice({
  name: "categories",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "fetching categories";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchLists.pending, (state) => {
        state.status = "fetching lists";
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.lists = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchLists.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addCategory.pending, (state) => {
        state.status = "adding";
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addCategory.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(addList.pending, (state) => {
        state.status = "adding lists";
      })
      .addCase(addList.fulfilled, (state, action) => {
        state.lists.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addList.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(removeCategory.pending, (state) => {
        state.status = "removing";
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          ({ categoryId }) => categoryId !== action.payload
        );
        state.status = "succeeded";
      })
      .addCase(removeCategory.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(removeList.pending, (state) => {
        state.status = "removing list";
      })
      .addCase(removeList.fulfilled, (state, action) => {
        state.status = "succeeded list";
        state.lists = state.lists.filter(
          (list) => list.listId !== action.payload
        );
      })
      .addCase(removeList.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
