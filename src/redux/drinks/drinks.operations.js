import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/auth.operations";

export const fetchHomePageDrinks = createAsyncThunk(
  "coctails/fetchHomepage",
  async (_, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      if (!token) {
        return null;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const resp = await instance.get("/drinks/mainpage", config);
      const data = resp.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
