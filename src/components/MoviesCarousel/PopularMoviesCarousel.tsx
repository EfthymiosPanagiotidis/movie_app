import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getPopularMovies,
  PopularMoviesState,
  selectPopularMovies,
} from "../../features/popularMovies/popularMoviesSlice";
import { MoviesCarousel } from "./MoviesCarousel";
import { ProgressSpinner } from "primereact/progressspinner";

function PopularMoviesCarousel() {
  const popularMoviesState: PopularMoviesState =
    useAppSelector(selectPopularMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);
  if (popularMoviesState.loading) {
    return (
      <div className="flex flex-row justify-content-center">
        <ProgressSpinner />
      </div>
    );
  } else if (popularMoviesState.error) {
    return <div>Error</div>;
  } else {
    return (
      <>
        {popularMoviesState.value.length > 0 && (
          <MoviesCarousel
            movies={popularMoviesState.value.slice(0, 20)}
            header={"Most Popular Movies"}
          />
        )}
      </>
    );
  }
}

export { PopularMoviesCarousel };
