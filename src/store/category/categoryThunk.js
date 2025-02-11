import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../config/firebase.js";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { setLists } from "./categorySlice";

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (uid, { rejectWithValue }) => {
    try {
      const categoriesRef = collection(db, "categories");
      const q = query(categoriesRef, where("createdBy", "==", uid));
      const querySnapshot = await getDocs(q);

      const categories = querySnapshot?.docs?.map((doc) => ({
        id: doc?.id,
        ...doc.data(),
      }));

      return categories;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchLists = createAsyncThunk(
  "category/fetchLists",
  async (categoryId, { dispatch, rejectWithValue }) => {
    try {
      const listsRef = collection(db, "categories", categoryId, "lists");

      return new Promise((resolve) => {
        onSnapshot(listsRef, (snapshot) => {
          const lists = snapshot.docs.map((doc) => ({
            listId: doc.id,
            ...doc.data(),
          }));

          dispatch(setLists(lists));
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
        categoryId: docRef?.id,
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

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async ({ categoryId, name }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "categories", categoryId);
      const payload = {
        updatedAt: Date.now(),
        name,
      };
      await updateDoc(docRef, payload);
      return { categoryId, name };
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
      const listId = listDocRef?.id;

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

export const updateList = createAsyncThunk(
  "category/updateList",
  async ({ listData, categoryId, listId }, { rejectWithValue }) => {
    try {
      const listDocRef = doc(db, "categories", categoryId, "lists", listId);
      await updateDoc(listDocRef, {
        listTitle: listData?.listTitle,
        items: listData?.items,
        updatedAt: Date.now(),
      });

      return { ...listData, listId };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateCheckedValue = createAsyncThunk(
  "lists/updateCheckedValue",
  async ({ categoryId, listId, id, checked }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "categories", categoryId, "lists", listId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return rejectWithValue("Document not found");

      const updatedItems = docSnap
        .data()
        .items.map((item) =>
          item.itemId === id ? { ...item, checked } : item
        );

      await updateDoc(docRef, { items: updatedItems, updatedAt: Date.now() });

      return { listId, updatedItems };
    } catch (error) {
      return rejectWithValue(error.message);
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
