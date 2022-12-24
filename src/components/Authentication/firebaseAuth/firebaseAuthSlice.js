import { useMemo } from "react";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { } from "../../../Redux/Store";
import { login, signUp } from "../../../Redux/Services/authService.js";
import {
  encryptedStorage,
  decryptedStorage,
} from "../../../Redux/Services/cryptoJS";
import { AUTH_LOGIN, AUTH_SIGN_UP } from "../../ConstAPI/ConstAPI";

const getDefaultUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};

console.log("descripted--------",
  //  decryptedStorage("user", true),
  getDefaultUser());

const initialState = {
  user: localStorage.getItem("user") ? getDefaultUser() : {},
  signUpResponse: {},
  error: {},
};

export const authLogin = createAsyncThunk(AUTH_LOGIN, async (payload) => {
  return login(payload);
});

export const authSignup = createAsyncThunk(AUTH_SIGN_UP, async (payload) => {
  return signUp(payload);
});

// export const authReset = createAsyncThunk(AUTH_SIGN_UP, async (payload) => {
//   return resetLink(payload);
// });

const firebaseAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.user = action.payload.data;
    });
    builder.addCase(authSignup.fulfilled, (state, action) => {
      state.signUpResponse = action.payload.data;
    });
  },
});

export const selectUser = (state) => {
  return state.auth.user;
};

export const useUser = () => {
  const user = useSelector(selectUser);
  // return user;
  localStorage.setItem("user", JSON.stringify(user));
  return useMemo(() => ({ user }), [user]);
};

export default firebaseAuthSlice.reducer;

export const selectSignupResponse = (state) => state.auth.signUpResponse;

export const useSignupResponse = () => {
  const signUpResponse = useSelector(selectSignupResponse);
  return useMemo(() => ({ signUpResponse }), [signUpResponse]);
};

export const selectFirebaseAuthList = (state) => state.auth;
