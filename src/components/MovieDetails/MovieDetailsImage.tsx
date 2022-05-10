import React from "react";
import { MovieDetails } from "../../models/MovieDetails";

function MovieDetailsImage({ movie }: { movie: MovieDetails }) {
  return (
    <div className="flex flex-row justify-content-center">
      <img src={movie.posterUrl} alt={movie.posterUrl} width="100%" />
    </div>
  );
}

export { MovieDetailsImage };
