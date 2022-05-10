import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  SearchedMoviesState,
  searchMovies,
  selectSearchedMovies,
} from "../features/searchedMovies/searchedMoviesSlice";
import { Paginator, PaginatorPageState } from "primereact/paginator";
import { MoviesDisplay } from "./MoviesDisplay/MoviesDisplay";
import { ProgressSpinner } from "primereact/progressspinner";

function SearchResults({
  first,
  setFirst,
}: {
  first: number;
  setFirst: React.Dispatch<React.SetStateAction<number>>;
}) {
  const searchedMoviesState: SearchedMoviesState =
    useAppSelector(selectSearchedMovies);
  const dispatch = useAppDispatch();

  const onPageChange = (event: PaginatorPageState) => {
    setFirst(event.first);
    dispatch(
      searchMovies({
        query: searchedMoviesState.searchQuery,
        page: event.page + 1,
      })
    );
  };

  if (searchedMoviesState.loading) {
    return (
      <div className="flex flex-row justify-content-center">
        <ProgressSpinner />
      </div>
    );
  } else if (searchedMoviesState.error) {
    return <div>Error</div>;
  } else {
    return (
      <div>
        {searchedMoviesState.value.length > 0 ? (
          <>
            <MoviesDisplay movies={searchedMoviesState.value} />
            <Paginator
              first={first}
              rows={20}
              totalRecords={searchedMoviesState.totalResults}
              onPageChange={onPageChange}
            />
          </>
        ) : (
          <div className="flex flex-row justify-content-center">
            No results found
          </div>
        )}
      </div>
    );
  }
}

export { SearchResults };
