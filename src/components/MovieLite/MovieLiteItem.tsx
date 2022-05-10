import React from "react";
import { MovieLite } from "../../models/MovieLite";
import { MovieLiteItemFooter } from "./MovieLiteItemFooter";
import { MovieLiteItemImage } from "./MovieLiteItemImage";

function MovieLiteItem({ movie }: { movie: MovieLite }) {
  return (
    <>
      <MovieLiteItemImage movie={movie} />
      <MovieLiteItemFooter movie={movie} />
    </>
  );
}

export { MovieLiteItem };
