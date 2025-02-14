import { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptCardShimmer from "./GptCardShimmer";

const GptSearch = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full h-lvh flex flex-col items-center justify-center">
      <GptSearchBar setLoading={setLoading} />
      {loading ? <GptCardShimmer /> : <GptMovieSuggestion />}
    </div>
  );
};

export default GptSearch;
