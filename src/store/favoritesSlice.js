import { createSlice } from "@reduxjs/toolkit";

const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavorites,
  reducers: {
    toggleFavorite: (state, action) => {
      const city = action.payload;
      const index = state.indexOf(city);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(city);
      }
      localStorage.setItem("favorites", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;