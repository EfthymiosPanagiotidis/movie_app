import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { GetTopMoviesRequest } from "../../contracts/services/IGetTopMoviesService";
import { MovieLite } from "../../models/MovieLite";
import { getTopMoviesService } from "../../services/GetTopMoviesService";

export interface TopMoviesState {
  value: MovieLite[];
  loading: boolean;
  error: boolean;
}

const initialState: TopMoviesState = {
  value: [],
  loading: false,
  error: false,
};

export const getTopMovies = createAsyncThunk("topMovies/get", async () => {
  const getTopMoviesRequest: GetTopMoviesRequest = new GetTopMoviesRequest({
    apiKey: "0395ab39cfa35c7eff8db454061e4c8c",
  });
  const movies: MovieLite[] =
    (await getTopMoviesService.handle(getTopMoviesRequest)).value || [];
  return movies;
});

export const topMoviesSlice = createSlice({
  name: "topMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getTopMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.value = action.payload;
      })
      .addCase(getTopMovies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectTopMovies = (state: RootState) => state.topMovies;

export default topMoviesSlice.reducer;
