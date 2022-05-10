import React from "react";
import { MovieDetailsImage } from "./MovieDetailsImage";
import { MovieDetailsCredits } from "./MovieDetailsCredits";
import { MovieDetails } from "../../models/MovieDetails";
import { MovieDetailsPlot } from "./MovieDetailsPlot";

function MovieDetailsItem({ movie }: { movie: MovieDetails }) {
  return (
    <div className="grid m-0 p-0">
      <div className="col-12 sm:col-6 md:col-6 lg:col-5 xl:col-5">
        <MovieDetailsImage movie={movie} />
      </div>
      <div className="col-12 sm:col-6 md:col-6 lg:col-7 xl:col-7">
        <MovieDetailsCredits movie={movie} />
      </div>
      <div className="col-12">
        <MovieDetailsPlot movie={movie} />
      </div>
    </div>
  );
}

export { MovieDetailsItem };
