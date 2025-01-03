import { BASE_URL } from "../utils/BaseUrl";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Paging from "./Paging";
import MovieCard from "./MovieCard";
import MovieContext from "../Context/MovieContext";
import PagingContext from "../Context/PagingContext";
import { useSelector } from "react-redux";

export default function Movie() {
  const [movies, setMovies] = useState(null);
  const { watchList } = useContext(MovieContext);
  // const {pageno} = useContext(PagingContext);
  useSelector(store)
  

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
            />
          );
        })}
      </div>

      <Paging  />
    </>
  );
}
