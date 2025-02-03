/* eslint-disable no-unused-vars */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config/firebase.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (_, { rejectWithValue }) => {
    const categoriesRef = collection(db, "categories");

    try {
      return await new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(
          categoriesRef,
          (snapshot) => {
            const categories = snapshot.docs.map((doc) => ({
              ...doc.data(),
            }));
            resolve(categories);
          },
          (error) => {
            reject(error);
          }
        );
      });
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchLists = createAsyncThunk(
  "category/fetchLists",
  async (categoryId, { rejectWithValue }) => {
    try {
      const listsRef = collection(doc(db, "categories", categoryId), "lists");
      const snapshot = await getDocs(listsRef);
      const lists = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      return lists;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (categoryName, { rejectWithValue }) => {
    try {
      const docRef = doc(collection(db, "categories"));

      const payload = {
        name: categoryName,
        categoryId: docRef.id,
        createdAt: Date.now(),
      };
      await setDoc(docRef, payload);

      return payload;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeCategory = createAsyncThunk(
  "category/removeCategory",
  async (categoryId, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "categories", categoryId);

      await deleteDoc(docRef);

      return categoryId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addList = createAsyncThunk(
  "category/addList",
  async ({ listData, categoryId }, { rejectWithValue }) => {
    try {
      const listsRef = collection(doc(db, "categories", categoryId), "lists");

      const listDocRef = doc(listsRef);
      const listId = listDocRef.id;

      await setDoc(listDocRef, {
        ...listData,
        listId,
        createdBy: categoryId,
        createdAt: Date.now(),
      });

      return { ...listData, listId, createdBy: categoryId };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeList = createAsyncThunk(
  "category/removeList",
  async ({ categoryId, listId }, { rejectWithValue }) => {
    try {
      const listDocRef = doc(db, "categories", categoryId, "lists", listId);
      await deleteDoc(listDocRef);
      return listId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
