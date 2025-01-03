import MovieContext from "../Context/MovieContext";
import { BASE_URL, GENRES_TO_MAPPING, ALL_GENERE } from "../utils/BaseUrl";
import { useContext, useEffect, useState } from "react";

export default function WatchList() {
  const [generes, setGenere] = useState([ALL_GENERE]);
  const [selectedGener, setSelectedGenere] = useState(ALL_GENERE);
  const [search, setSearch] = useState("");
  const [isTitleAsc, setIsTitleAsc] = useState(true);
  const [isRatingAsc, setIsRatingAsc] = useState(true);
  const [isPopularityAsc, setIsPopularityAsc] = useState(true);

  const {watchList:movies,setWatchList,removeFromWatchList} = useContext(MovieContext);

  function sortByTitle() {
    const sorted = [...movies].sort((movieA, movieB) => {
      return isTitleAsc
        ? movieA.title.localeCompare(movieB.title)
        : movieB.title.localeCompare(movieA.title);
    });
    setWatchList(sorted);
    setIsTitleAsc(!isTitleAsc);
  }

  function sortByRatings() {
    const sorted = [...movies].sort((movieA, movieB) => {
      return isRatingAsc
        ? movieA.vote_average - movieB.vote_average
        : movieB.vote_average - movieA.vote_average;
    });
    setWatchList(sorted);
    setIsRatingAsc(!isRatingAsc);
  }

  function sortByPopularity() {
    const sorted = [...movies].sort((movieA, movieB) => {
      return isPopularityAsc
        ? movieA.popularity - movieB.popularity
        : movieB.popularity - movieA.popularity;
    });
    setWatchList(sorted);
    setIsPopularityAsc(!isPopularityAsc);
  }

  useEffect(() => {
    const genereList = movies.map(
      (movie) => GENRES_TO_MAPPING[movie.genre_ids[0]] || "Unknown"
    );
    const uniqueGenereList = [...new Set(genereList)];
    setGenere([ALL_GENERE, ...uniqueGenereList]);
  }, [movies]);

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex w-[90%] my-4 justify-around flex-wrap gap-4">
          {generes.map((genere, index) => (
            <div
              key={index}
              onClick={() => setSelectedGenere(genere)}
              className={`bg-slate-400 cursor-pointer text-white h-[3rem] w-[12rem] flex items-center justify-center text-xl font-bold rounded-2xl ${
                genere === selectedGener ? "bg-blue-400" : ""
              }`}
            >
              {genere}
            </div>
          ))}
        </div>
        <input
          value={search}
          className="bg-slate-200 border px-3 m-8 h-[3rem] w-[20rem] text-xl rounded-lg"
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setSearch(e.target.value)}
        />
        <table className="rounded-xl border w-[90%] overflow-hidden">
          <thead className="bg-slate-200 h-8 rounded-lg">
            <tr className="border-b-2 text-left">
              <th onClick={sortByTitle} className="px-16 cursor-pointer">
                Name
              </th>
              <th className="text-center">
                <i
                  onClick={sortByRatings}
                  className="fa-solid fa-sort mx-2 cursor-pointer"
                ></i>
                Ratings
              </th>
              <th className="text-center">
                <i
                  onClick={sortByPopularity}
                  className="fa-solid fa-sort mx-2 cursor-pointer"
                ></i>
                Popularity
              </th>
              <th className="text-center">Genre</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {movies
              .filter(
                (movie) =>
                  selectedGener === ALL_GENERE ||
                  selectedGener === GENRES_TO_MAPPING[movie.genre_ids[0]]
              )
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie) => (
                <tr key={movie.id} className="border-2 hover:bg-slate-100">
                  <td className="flex m-4 gap-8 items-center font-bold">
                    <img
                      className="h-32 w-50 rounded-lg"
                      src={BASE_URL + movie.backdrop_path}
                      alt="Poster"
                    />
                    {movie.title}
                  </td>
                  <td className="text-zinc-600 text-center">
                    {movie.vote_average}
                  </td>
                  <td className="text-zinc-600 text-center">
                    {movie.popularity}
                  </td>
                  <td className="text-zinc-600 text-center">
                    {GENRES_TO_MAPPING[movie.genre_ids[0]] || "Unknown"}
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => removeFromWatchList(movie)}
                      className="text-red-600 cursor-pointer"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
