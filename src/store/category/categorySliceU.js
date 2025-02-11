import { createSlice } from "@reduxjs/toolkit";
import {
  addCategory,
  fetchCategory,
  fetchLists,
  removeCategory,
  removeList,
  updateCategory,
  updateList,
  updateCheckedValue,
} from "./categoryThunkU";

const initialState = {
  categories: [],
  lists: [],
  items: [],
  status: "idle",
};

export const categoryReducer = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setLists: (state, action) => {
      state.lists = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
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
        state.status = "succeeded";
        state.lists = action.payload;
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
      .addCase(updateCategory.pending, (state) => {
        state.status = "updating";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const { categoryId, name } = action.payload;
        const category = state.categories?.find(
          (cat) => cat?.categoryId === categoryId
        );
        state.status = "succeeded";
        if (category) category.name = name;
      })
      .addCase(updateCategory.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateList.pending, (state) => {
        state.status = "updating list";
      })
      .addCase(updateList.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.lists?.findIndex(
          (list) => list?.listId === action.payload.listId
        );
        if (index !== -1) {
          state.lists[index] = action.payload;
        }
      })
      .addCase(updateList.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateCheckedValue.pending, (state) => {
        state.status = "updating checked value";
      })
      .addCase(updateCheckedValue.fulfilled, (state, action) => {
        const { listId, updatedItems } = action.payload;
        state.lists = state.lists.map((list) =>
          list.listId === listId ? { ...list, items: updatedItems } : list
        );
        state.status = "succeeded";
      })
      .addCase(updateCheckedValue.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(removeCategory.pending, (state) => {
        state.status = "removing";
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.categories = state.categories?.filter(
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
        state.status = "succeeded";
        state.lists = state.lists?.filter(
          (list) => list?.listId !== action.payload
        );
      })
      .addCase(removeList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setLists, setItems } = categoryReducer.actions;
export default categoryReducer.reducer;
