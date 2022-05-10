import React from "react";
import { PopularMoviesCarousel } from "../components/MoviesCarousel/PopularMoviesCarousel";
import { TopMoviesCarousel } from "../components/MoviesCarousel/TopMoviesCarousel";

function Home() {
  return (
    <>
      <PopularMoviesCarousel />
      <hr />
      <TopMoviesCarousel />
    </>
  );
}

export { Home };
