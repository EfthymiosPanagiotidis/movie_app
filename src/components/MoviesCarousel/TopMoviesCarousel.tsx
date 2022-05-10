import { ProgressSpinner } from "primereact/progressspinner";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getTopMovies,
  selectTopMovies,
  TopMoviesState,
} from "../../features/topMovies/topMoviesSlice";
import { MoviesCarousel } from "./MoviesCarousel";

function TopMoviesCarousel() {
  const topMoviesState: TopMoviesState = useAppSelector(selectTopMovies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTopMovies());
  }, [dispatch]);
  if (topMoviesState.loading) {
    return (
      <div className="flex flex-row justify-content-center">
        <ProgressSpinner />
      </div>
    );
  } else if (topMoviesState.error) {
    return <div>Error</div>;
  } else {
    return (
      <>
        {topMoviesState.value.length > 0 && (
          <MoviesCarousel
            movies={topMoviesState.value.slice(0, 20)}
            header={"Top Movies"}
          />
        )}
      </>
    );
  }
}

export { TopMoviesCarousel };
