import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config/firebase.js";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { setLists } from "./categorySlice";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (uid, { rejectWithValue }) => {
    try {
      const q = query(
        collection(db, "categories"),
        where("createdBy", "==", uid)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchLists = createAsyncThunk(
  "category/fetchLists",
  async (categoryId, { dispatch, rejectWithValue }) => {
    try {
      const q = query(
        collection(db, "lists"),
        where("categoryId", "==", categoryId)
      );
      return new Promise((resolve) => {
        onSnapshot(q, (snapshot) => {
          dispatch(
            setLists(
              snapshot.docs.map((doc) => ({ listId: doc.id, ...doc.data() }))
            )
          );
          resolve();
        });
      });
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async ({ categoryName, uid }, { rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "categories"));
      const payload = {
        name: categoryName,
        categoryId: docRef.id,
        createdBy: uid,
        createdAt: Date.now(),
      };
      await setDoc(docRef, payload);
      return payload;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addList = createAsyncThunk(
  "category/addList",
  async ({ listTitle, categoryId }, { rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "lists"));
      const payload = {
        listId: docRef.id,
        listTitle,
        categoryId,
        createdAt: Date.now(),
      };
      await setDoc(docRef, payload);
      return payload;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addItem = createAsyncThunk(
  "list/addItem",
  async ({ name, checked, listId }, { rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "items"));
      const payload = {
        itemId: docRef.id,
        name,
        checked,
        listId,
        createdAt: Date.now(),
      };
      await setDoc(docRef, payload);
      return payload;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateCheckedValue = createAsyncThunk(
  "items/updateCheckedValue",
  async ({ itemId, checked }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "items", itemId);
      await updateDoc(docRef, { checked, updatedAt: Date.now() });
      return { itemId, checked };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeCategory = createAsyncThunk(
  "category/removeCategory",
  async (categoryId, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "categories", categoryId));
      return categoryId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeList = createAsyncThunk(
  "category/removeList",
  async (listId, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "lists", listId));
      return listId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeItem = createAsyncThunk(
  "list/removeItem",
  async (itemId, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, "items", itemId));
      return itemId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
