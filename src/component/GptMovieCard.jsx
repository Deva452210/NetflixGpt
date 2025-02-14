/* eslint-disable react/prop-types */
import { IMG_CDN_URL } from "../utils/constants";

const GptMovieCard = ({ posterPath, movieName }) => {
  return (
    <div className=" bg-gray-900 w-[240px]  p-2 rounded-md flex flex-col gap-2">
      <img
        className="w-full object-cover h-[140px] rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="Movie poster"
      />
      <p className="text-[14px]">{movieName}</p>
    </div>
  );
};

export default GptMovieCard;
