import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://drinkmaster-backend-2ix1.onrender.com/api",
});

const authHeaderToken = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = "";
  },
};

const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("/auth/signup", credentials);
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const signIn = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post("/auth/signin", credentials);
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const authOperations = {
    signUp,
    signIn,
};
