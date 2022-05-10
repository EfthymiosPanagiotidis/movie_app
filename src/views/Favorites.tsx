import React from "react";
import { useAppSelector } from "../app/hooks";
import { MoviesDisplay } from "../components/MoviesDisplay/MoviesDisplay";
import {
  FavoriteMoviesState,
  selectFavoriteMovies,
} from "../features/favoriteMovies/favoriteMoviesSlice";

function Favorites() {
  const favoriteMoviesState: FavoriteMoviesState =
    useAppSelector(selectFavoriteMovies);
  return (
    <>
      {favoriteMoviesState.value.length > 0 ? (
        <MoviesDisplay movies={favoriteMoviesState.value} />
      ) : (
        <div className="flex flex-row justify-content-center">
          Add a movie to your favorites
        </div>
      )}
    </>
  );
}

export { Favorites };
