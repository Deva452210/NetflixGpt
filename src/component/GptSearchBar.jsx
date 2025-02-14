import { useRef } from "react";
import { GEMINI_API_KEY } from "../utils/constants";

const GptSearchBar = () => {
  const apiKey = GEMINI_API_KEY; // Replace with your actual API key
  const searchText = useRef(null);

  const handleInputText = async () => {
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

      // Convert comma-separated string into an array and trim spaces
      const movieList = textResponse
        .split(",")
        .map((movie) => movie.trim())
        .slice(0, 5); // Ensure max 5 items

      console.log(movieList);
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
