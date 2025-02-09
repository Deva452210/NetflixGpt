/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-[30%] p-3 flex flex-col items-start ">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className=" text-sm">{overview}</p>
      <div className=" flex items-center gap-3 mt-3">
        <button className=" bg-white px-4 py-2 rounded-md font-semibold text-sm">
          Play
        </button>
        <button className=" bg-gray-800 px-4 py-2 rounded-md text-white text-sm">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
