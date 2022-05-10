import React, { useCallback } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  SearchedMoviesState,
  searchMovies,
  selectSearchedMovies,
  setSearchQuery,
} from "../features/searchedMovies/searchedMoviesSlice";

function SearchForm({
  setFirst,
}: {
  setFirst: React.Dispatch<React.SetStateAction<number>>;
}) {
  const searchedMoviesState: SearchedMoviesState =
    useAppSelector(selectSearchedMovies);
  const dispatch = useAppDispatch();
  const submitForm = useCallback(() => {
    setFirst(0);
    dispatch(
      searchMovies({
        query: searchedMoviesState.searchQuery,
        page: 1,
      })
    );
  }, [dispatch, setFirst, searchedMoviesState.searchQuery]);
  return (
    <div className="grid pb-5 px-5 pt-1 m-0">
      <div className="col-9 p-2">
        <div className="p-input-icon-left w-full">
          <i className="pi pi-search" />
          <InputText
            value={searchedMoviesState.searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            placeholder="Search"
            className="w-full"
          />
        </div>
      </div>
      <div className="col-3 p-2">
        <Button label="Search" aria-label="Search" onClick={submitForm} />
      </div>
    </div>
  );
}

export { SearchForm };
