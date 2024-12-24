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

export const fetchCocktails = createAsyncThunk(
  "coctails/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/drinks");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOwnCoctails = createAsyncThunk(
  "coctails/fetchOwnCoctails",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/drinks/own");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPopularDrinks = createAsyncThunk(
  "coctails/getPopular",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/drinks/popular");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteCocktails = createAsyncThunk(
  "coctails/getFavorite",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/drinks/favorites");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCocktail = createAsyncThunk(
  "cocktails/addCocktail",
  async (coctail, thunkAPI) => {
    try {
      const { data } = await instance.post("/drinks/own/add/", coctail);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOwnCocktail = createAsyncThunk(
  "coctails/deleteOwnCocktail",
  async (coctailId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/drinks/own/remove/${coctailId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "coctails/addToFavorite",
  async (coctailId, thunkAPI) => {
    try {
      const { data } = await instance.post(
        `/drinks/favorites/add/${coctailId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  "coctails/deleteFromfavorites",
  async (coctailId, thunkAPI) => {
    try {
      const { data } = await instance.delete(
        `/drinks/favorites/remove/${coctailId}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDrinkDetails = createAsyncThunk(
  "coctails/fetchDrinkDetails",
  async (id, thunkAPI) => {
      console.log("Fetching drink details with ID:", id);
    try {
      const { data } = await instance.get(`/drinks/${id}`);
      return data;
    } catch (error) {
        console.error("Error fetching drink details:", error.message); 
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDrinksBySearch = createAsyncThunk(
  "coctails/fetchDrinksBySearch",
  async (params, thunkAPI) => {
    try {
      const { data } = await instance.get("/drinks/search", { params });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const drinksOperations = {
  fetchOwnCoctails,
  fetchCocktails,
  fetchPopularDrinks,
  fetchDrinksBySearch,
  fetchFavoriteCocktails,
  addCocktail,
  deleteOwnCocktail,
  addToFavorites,
  deleteFromFavorites,
  fetchHomePageDrinks,
  fetchDrinkDetails,
};
