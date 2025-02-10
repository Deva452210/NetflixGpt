/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className=" w-[140px] mr-3 rounded-md overflow-hidden">
      <img
        className="w-full  object-cover"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Image"
      />
    </div>
  );
};

export default MovieCard;
