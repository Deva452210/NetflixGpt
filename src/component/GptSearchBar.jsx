/* eslint-disable react/prop-types */
import { useRef } from "react";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = ({ setLoading }) => {
  const apiKey = GEMINI_API_KEY; // Replace with your actual API key
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Search movies in TMDB

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleInputText = async () => {
    setLoading(true);
    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${apiKey}`;

      const requestData = {
        contents: [
          {
            parts: [
              {
                text: `List 5 ${searchText.current.value} movies as a comma-separated list. Example: Movie1, Movie2, Movie3, Movie4, Movie5`,
              },
            ],
          },
        ],
      };

      const apiResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!apiResponse.ok) {
        throw new Error(`HTTP error! Status: ${apiResponse.status}`);
      }

      const data = await apiResponse.json();
      const textResponse = data.candidates[0].content.parts[0].text;

      // Results - List of movies
      const movieList = textResponse
        .split(",")
        .map((movie) => movie.trim())
        .slice(0, 5); // Ensure max 5 items

      //Search movie in TMDB for each movie - Returns promises
      const promiseArray = movieList.map((movieName) =>
        searchMovieTmdb(movieName)
      );
      const tmdbResults = await Promise.all(promiseArray);

      //Filter each tmdbResults and return only one movie
      const Results = tmdbResults.map((item) => item[0]);
      dispatch(
        addGptMovieResult({ movieName: movieList, movieResults: Results })
      );
      setLoading(false);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
    }
    searchText.current.value = "";
  };

  return (
    <div className=" flex items-center gap-3">
      <input
        ref={searchText}
        type="text"
        placeholder="What movies you want see?"
        className=" outline-none px-4 py-3 w-[500px] border border-solid border-gray-300 bg-black rounded-md"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleInputText();
          }
        }}
      />
      <button
        onClick={handleInputText}
        className=" text-black bg-white hover:bg-gray-100 px-4 py-3 rounded-md font-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default GptSearchBar;
