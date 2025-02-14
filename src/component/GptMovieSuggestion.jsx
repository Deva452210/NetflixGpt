/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import GptMovieCard from "./GptMovieCard";

const GptMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <>
      <div className="p-10 flex gap-2 flex-wrap">
        {movieResults.map((movie) => (
          <GptMovieCard
            key={movie.id}
            posterPath={movie.backdrop_path}
            movieName={movie.original_title}
          />
        ))}
      </div>
    </>
  );
};

export default GptMovieSuggestion;
