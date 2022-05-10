import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import popularMoviesReducer from "../features/popularMovies/popularMoviesSlice";
import searchedMoviesReducer from "../features/searchedMovies/searchedMoviesSlice";
import topMoviesReducer from "../features/topMovies/topMoviesSlice";
import favoriteMoviesReducer from "../features/favoriteMovies/favoriteMoviesSlice";
import detailedMovieReducer from "../features/detailedMovie/detailedMovieSlice";

export const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    topMovies: topMoviesReducer,
    searchedMovies: searchedMoviesReducer,
    favoriteMovies: favoriteMoviesReducer,
    detailedMovie: detailedMovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "popularMovies/get/fulfilled",
          "topMovies/get/fulfilled",
          "searchedMovies/get/fulfilled",
          "favoriteMovies/addFavoriteMovie",
          "favoriteMovies/removeFavoriteMovie",
          "detailedMovie/get/fulfilled",
        ],
        ignoredPaths: [
          "popularMovies.value",
          "topMovies.value",
          "searchedMovies.value",
          "favoriteMovies.value",
          "detailedMovie.value",
        ],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
