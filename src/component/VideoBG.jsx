/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBG = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //Fetch trailer data
  useMovieVideo(movieId);

  return (
    <div className=" w-[100%] h-[90vh] absolute">
      <iframe
        className=" aspect-video w-full h-full"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=UnKtb62e9Q85M0xn?&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&fs=1`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBG;
