import React from 'react';
import MovieCard from '../MovieCard';
import '../index.css'

function MovieList({movies}) {
  return (
    <div className="app-container">
        {movies.map((movie) => (
          <MovieCard
          key={movie.id}
          movie={{
            id: movie.id,
            title: movie.title,
            posterUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            vote_average: movie.vote_average
          }}
        />
        ))}
      </div>
  );
}

export default MovieList;