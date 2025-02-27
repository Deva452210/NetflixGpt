import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div>
      <MovieList title={"Now Playing"} movie={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movie={movies.popularMovies} />
      <MovieList title={"Horror"} movie={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
