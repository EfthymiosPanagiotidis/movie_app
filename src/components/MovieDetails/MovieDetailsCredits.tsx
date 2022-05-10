import React from "react";
import { MovieDetails } from "../../models/MovieDetails";

function MovieDetailsCredits({ movie }: { movie: MovieDetails }) {
  return (
    <div>
      <h3>Cast</h3>
      {movie.movieCredits ? (
        <ul>
          {movie.movieCredits.actors.slice(0, 8).map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
      ) : (
        <p>-</p>
      )}
      <hr />
      <h3>Crew</h3>
      {movie.movieCredits ? (
        <ul>
          {movie.movieCredits.directors.slice(0, 5).map((x, index) => (
            <li key={index}>{x} (Director)</li>
          ))}
          {movie.movieCredits.writers.slice(0, 5).map((x, index) => (
            <li key={index}>{x} (Writer)</li>
          ))}
        </ul>
      ) : (
        <p>-</p>
      )}
    </div>
  );
}

export { MovieDetailsCredits };
