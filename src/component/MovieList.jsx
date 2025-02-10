/* eslint-disable react/prop-types */
import { useRef } from "react";
import MovieCard from "./MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MovieList = ({ title, movie }) => {
  const scrollRef = useRef(null);

  if (!movie) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Adjust scroll speed
      scrollRef.current.style.scrollBehavior = "smooth"; // Apply smooth scroll
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
      });
    }
  };

  return (
    <div className="relative flex flex-col gap-2 px-4 py-2 text-white text-xl font-bold">
      <h1>{title}</h1>

      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hidden md:flex z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Movie List */}
      <div
        className="flex overflow-x-scroll scrollbar-hide transition-all duration-500 ease-in-out"
        ref={scrollRef}
      >
        <div className="flex gap-2">
          {movie.map((item) => (
            <MovieCard key={item.id} posterPath={item.poster_path} />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hidden md:flex z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default MovieList;
