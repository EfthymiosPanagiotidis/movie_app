import React from "react";
import { Carousel } from "primereact/carousel";
import { MovieLite } from "../../models/MovieLite";
import { MovieLiteItem } from "../MovieLite/MovieLiteItem";

function MoviesCarousel({
  movies,
  header,
}: {
  movies: MovieLite[];
  header: string;
}) {
  const responsiveOptions = [
    {
      breakpoint: "1000px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="mt-5">
      <div className="grid m-0 p-0 justify-content-center">
        <h2>{header}</h2>
      </div>
      <Carousel
        value={movies}
        itemTemplate={(movie) => <MovieLiteItem movie={movie} />}
        numVisible={4}
        numScroll={4}
        responsiveOptions={responsiveOptions}
      />
    </div>
  );
}

export { MoviesCarousel };
