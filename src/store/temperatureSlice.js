import { createSlice } from "@reduxjs/toolkit";

const initialUnit = localStorage.getItem("temperatureUnit") || "C";

const temperatureSlice = createSlice({
  name: "temperature",
  initialState: initialUnit,
  reducers: {
    setUnit: (state, action) => {
      localStorage.setItem("temperatureUnit", action.payload);
      return action.payload;
    },
    toggleUnit: (state) => {
      const newUnit = state === "C" ? "F" : "C";
      localStorage.setItem("temperatureUnit", newUnit);
      return newUnit;
    },
  },
});

export const { setUnit, toggleUnit } = temperatureSlice.actions;
export default temperatureSlice.reducer;