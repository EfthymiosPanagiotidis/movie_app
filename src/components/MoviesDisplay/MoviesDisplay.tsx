import React from "react";
import { MovieLite } from "../../models/MovieLite";
import { MovieLiteItem } from "../MovieLite/MovieLiteItem";

function MoviesDisplay({ movies }: { movies: MovieLite[] }) {
  return (
    <div className="grid m-0 justify-content-center">
      {movies.map((x: MovieLite) => (
        <div className="col-12 sm:col-6 md:col-6 ld:col-3 xl:col-3" key={x.id}>
          <MovieLiteItem movie={x} />
        </div>
      ))}
    </div>
  );
}

export { MoviesDisplay };
