import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
