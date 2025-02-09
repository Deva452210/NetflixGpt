/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBG = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  //Fetch trailer data
  useMovieVideo(movieId);

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=UnKtb62e9Q85M0xn`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBG;
