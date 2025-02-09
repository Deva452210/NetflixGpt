import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";

const MainContainer = () => {
  //Fetch movies data from store
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies == null) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className=" bg-pink-300 w-[100%] h-[90vh]">
      <VideoBG movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
