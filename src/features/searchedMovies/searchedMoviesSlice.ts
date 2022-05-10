import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  SearchMoviesRequest,
  SearchMoviesResponse,
} from "../../contracts/services/ISearchMoviesService";
import { MovieLite } from "../../models/MovieLite";
import { searchMoviesService } from "../../services/SearchMoviesService";

export interface SearchedMoviesState {
  value: MovieLite[];
  loading: boolean;
  error: boolean;
  totalResults: number;
  totalPages: number;
  searchQuery: string;
}

const initialState: SearchedMoviesState = {
  value: [],
  loading: false,
  error: false,
  totalResults: 0,
  totalPages: 0,
  searchQuery: "",
};

export const searchMovies = createAsyncThunk(
  "searchedMovies/get",
  async (options: any) => {
    const searchMoviesRequest: SearchMoviesRequest = new SearchMoviesRequest({
      apiKey: "0395ab39cfa35c7eff8db454061e4c8c",
      options: options,
    });
    const searchMoviesResponse: SearchMoviesResponse =
      await searchMoviesService.handle(searchMoviesRequest);
    return searchMoviesResponse;
  }
);

export const searchedMoviesSlice = createSlice({
  name: "searchedMovies",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.value = action.payload.value || [];
        state.totalResults = action.payload.totalResults;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setSearchQuery } = searchedMoviesSlice.actions;

export const selectSearchedMovies = (state: RootState) => state.searchedMovies;

export default searchedMoviesSlice.reducer;
