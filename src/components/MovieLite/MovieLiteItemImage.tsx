import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  DetailedMovieState,
  getDetailedMovie,
  selectDetailedMovie,
  setVisible,
} from "../../features/detailedMovie/detailedMovieSlice";
import { MovieLite } from "../../models/MovieLite";

function MovieLiteItemImage({ movie }: { movie: MovieLite }) {
  const detailedMovieState: DetailedMovieState =
    useAppSelector(selectDetailedMovie);
  const dispatch = useAppDispatch();
  const showDetailedMovie = useCallback(() => {
    if (!detailedMovieState.value || movie.id !== detailedMovieState.value.id) {
      dispatch(getDetailedMovie({ id: movie.id }));
    }
    dispatch(setVisible(true));
  }, [dispatch, detailedMovieState, movie]);
  return (
    <div className="flex flex-row justify-content-center align-items-center">
      <img
        src={movie.posterUrl}
        alt={movie.posterUrl}
        onClick={showDetailedMovie}
        style={{
          cursor: "pointer",
          maxWidth: "200px"
        }}
      />
    </div>
  );
}

export { MovieLiteItemImage };
