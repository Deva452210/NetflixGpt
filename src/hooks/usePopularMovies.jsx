import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //Fetch movies data from TMDB API and update the store
  const dispatch = useDispatch();

  // Get Movies api
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();

    //Add movies to Redux store
    dispatch(addPopularMovies(json.results));
  };

  //  Call movies api
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
