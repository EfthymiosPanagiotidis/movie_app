import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addFavoriteMovie,
  FavoriteMoviesState,
  removeFavoriteMovie,
  selectFavoriteMovies,
} from "../../features/favoriteMovies/favoriteMoviesSlice";
import { MovieLite } from "../../models/MovieLite";
import { AddToFavoritesButton } from "../AddToFavoritesButton";
import { RemoveFromFavoritesButton } from "../RemoveFromFavortitesButton";

function MovieLiteItemFooter({ movie }: { movie: MovieLite }) {
  const favoriteMovies: FavoriteMoviesState =
    useAppSelector(selectFavoriteMovies);
  const dispatch = useAppDispatch();
  const removeFromFavorites = useCallback(() => {
    dispatch(removeFavoriteMovie(movie.id));
  }, [dispatch, movie]);
  const addToFavorites = useCallback(() => {
    dispatch(addFavoriteMovie(movie));
  }, [dispatch, movie]);

  return (
    <div className="flex flex-column justify-content-center align-items-center">
      {movie.title}
      {favoriteMovies.value.find((x) => x.id === movie.id) ? (
        <RemoveFromFavoritesButton onClick={removeFromFavorites} />
      ) : (
        <AddToFavoritesButton onClick={addToFavorites} />
      )}
    </div>
  );
}

export { MovieLiteItemFooter };
