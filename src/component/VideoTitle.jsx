/* eslint-disable react/prop-types */
const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w[100%] h-[100%] flex items-center justify-start px-8  bg-gradient-to-r from-black">
      <div className=" w-[30%] p-3 flex flex-col items-start relative gap-2 ">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className=" text-sm text-white">{overview}</p>
        <div className=" flex items-center gap-3 mt-3">
          <button className=" bg-white hover:bg-gray-100 px-4 py-2 rounded-md font-semibold text-sm text-gray-800">
            Play
          </button>
          <button className=" bg-gray-800  hover:bg-gray-700 px-4 py-2 rounded-md text-white text-sm">
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
