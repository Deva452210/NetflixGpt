import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  //Fetch Trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (!trailerVideo) getMovieVideo();
  }, []);
};

export default useMovieVideo;
