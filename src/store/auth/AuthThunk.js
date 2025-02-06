import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

export const signUpAction = createAsyncThunk(
  "auth/signUp",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userDocRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        createdAt: Date.now(),
        uid: userCredential?.user?.uid,
        email: userCredential?.user?.email,
        password,
        username,
      });

      const uid = userCredential?.user?.uid;

      return { email, uid };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential?.user?.uid;

      return { email, uid };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const signOutAction = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await firebaseSignOut(auth);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
