import React from "react";
import { MovieDetails } from "../../models/MovieDetails";

function MovieDetailsPlot({ movie }: { movie: MovieDetails }) {
  return (
    <div>
      <hr />
      <h3>Release Date</h3>
      <p>{movie.releaseDate ? movie.releaseDate.toString() : "-"}</p>
      <hr />
      <h3>Rating</h3>
      <p>
        {movie.rating}/10 ({movie.voteCount} votes)
      </p>
      <hr />
      <h3>Genres</h3>
      <ul>
        {movie.genres.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
      <hr />
      <h3>Runtime</h3>
      <p>{movie.runtime} mins.</p>
      <hr />
      <h3>Plot</h3>
      <p>{movie.overview}</p>
    </div>
  );
}

export { MovieDetailsPlot };
