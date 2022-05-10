import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { MovieLite } from "../../models/MovieLite";

export interface FavoriteMoviesState {
  value: MovieLite[];
}

const initialState: FavoriteMoviesState = {
  value: [],
};

export const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<MovieLite>) => {
      if (!state.value.includes(action.payload)) {
        state.value.push(action.payload);
      }
    },
    removeFavoriteMovie: (state, action: PayloadAction<string>) => {
      const index = state.value.findIndex((x) => x.id === action.payload);
      state.value.splice(index, 1);
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } =
  favoriteMoviesSlice.actions;

export const selectFavoriteMovies = (state: RootState) => state.favoriteMovies;

export default favoriteMoviesSlice.reducer;
