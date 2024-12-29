import { BASE_URL } from "../utils/BaseUrl";
import { useState, useEffect } from "react";
import axios from "axios";
import Paging from "./Paging";
import MovieCard from "./MovieCard";

export default function Movie({
  watchList,
  addToWatchList,
  removeFromWatchList,
}) {
  const [movies, setMovies] = useState(null);
  const [pageno, setPage] = useState(1);

  const handleprev = () => {
    if (pageno > 1) {
      setPage(pageno - 1);
    }
  };

  const handlenext = () => {
    setPage(pageno + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=14915bb7694a0701b51a3b7146b944e2&page=${pageno}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageno]);

  if (!movies) {
    return <h1> ... Loading </h1>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-evenly">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              fav={watchList.some((movieObj) => movieObj.id === movie.id)}
              title={movie.title}
              poster={BASE_URL + movie.backdrop_path}
              addToWatchList={addToWatchList}
              removeFromWatchList={removeFromWatchList}
            />
          );
        })}
      </div>

      <Paging pageno={pageno} handleUp={handlenext} handleDown={handleprev} />
    </>
  );
}
