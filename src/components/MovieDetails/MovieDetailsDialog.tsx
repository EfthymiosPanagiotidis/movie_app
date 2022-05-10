import React from "react";
import { Dialog } from "primereact/dialog";
import {
  DetailedMovieState,
  selectDetailedMovie,
  setVisible,
} from "../../features/detailedMovie/detailedMovieSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProgressSpinner } from "primereact/progressspinner";
import { MovieDetailsItem } from "./MovieDetailsItem";

function MovieDetailsDialog() {
  const detailedMovieState: DetailedMovieState =
    useAppSelector(selectDetailedMovie);
  const dispatch = useAppDispatch();

  return (
    <div className="grid justify-content-center">
    <Dialog
      header={detailedMovieState.loading ? "" : detailedMovieState.value?.title}
      visible={detailedMovieState.visible}
      className="col-12 sm:col-12 md:col-9 lg:col-8 xl:col-8"
      onHide={() => dispatch(setVisible(false))}
    >
      {detailedMovieState.loading || !detailedMovieState.value ? (
        <div className="grid m-0 justify-content-center">
          <ProgressSpinner />
        </div>
      ) : (
        <MovieDetailsItem movie={detailedMovieState.value} />
      )}
    </Dialog>
    </div>
  );
}

export { MovieDetailsDialog };
