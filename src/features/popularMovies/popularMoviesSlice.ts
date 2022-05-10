import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { GetPopularMoviesRequest } from "../../contracts/services/IGetPopularMoviesService";
import { MovieLite } from "../../models/MovieLite";
import { getPopularMoviesService } from "../../services/GetPopularMoviesService";

export interface PopularMoviesState {
  value: MovieLite[];
  loading: boolean;
  error: boolean;
}

const initialState: PopularMoviesState = {
  value: [],
  loading: false,
  error: false,
};

export const getPopularMovies = createAsyncThunk(
  "popularMovies/get",
  async () => {
    const getPopularMoviesRequest: GetPopularMoviesRequest =
      new GetPopularMoviesRequest({
        apiKey: "0395ab39cfa35c7eff8db454061e4c8c",
      });
    const movies: MovieLite[] =
      (await getPopularMoviesService.handle(getPopularMoviesRequest)).value ||
      [];
    return movies;
  }
);

export const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.value = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectPopularMovies = (state: RootState) =>
  state.popularMovies;

export default popularMoviesSlice.reducer;
