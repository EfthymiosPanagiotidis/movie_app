import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { GetDetailedMovieRequest } from "../../contracts/services/IGetDetailedMovieService";
import { MovieDetails } from "../../models/MovieDetails";
import { getDetailedMovieService } from "../../services/GetDetailedMovieService";

export interface DetailedMovieState {
  value: MovieDetails | null;
  loading: boolean;
  error: boolean;
  visible: boolean;
}

const initialState: DetailedMovieState = {
  value: null,
  loading: false,
  error: false,
  visible: false,
};

export const getDetailedMovie = createAsyncThunk(
  "detailedMovie/get",
  async (options: any) => {
    const getDetailedMovieRequest: GetDetailedMovieRequest =
      new GetDetailedMovieRequest({
        apiKey: "0395ab39cfa35c7eff8db454061e4c8c",
        id: options.id || "",
      });
    const movie: MovieDetails | null =
      (await getDetailedMovieService.handle(getDetailedMovieRequest)).value ||
      null;
    return movie;
  }
);

export const detailedMovieSlice = createSlice({
  name: "detailedMovie",
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetailedMovie.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.value = null;
      })
      .addCase(getDetailedMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.value = action.payload;
      })
      .addCase(getDetailedMovie.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.value = null;
      });
  },
});

export const { setVisible } = detailedMovieSlice.actions;

export const selectDetailedMovie = (state: RootState) => state.detailedMovie;

export default detailedMovieSlice.reducer;
