import { BASE_URL } from "../utils/BaseUrl";
import { useState, useEffect, useContext } from "react";
import Paging from "./Paging";
import MovieCard from "./MovieCard";
import MovieContext from "../Context/MovieContext";
import { useDispatch, useSelector } from "react-redux";
import movieThung from "../redux/Movies/movieThung";

export default function Movie() {
  const { watchList } = useContext(MovieContext);
  const { pageno } = useSelector((store) => store.pagingState);
  const { movies, isLoading, error } = useSelector((store) => store.movieState);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");


  useEffect(() => {
    dispatch(movieThung(pageno));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageno]);

  if (isLoading) {
    return (
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        ... Loading{" "}
      </h1>
    );
  }
  if (error) {
    return <h1>Error fetching data</h1>;
  }

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center my-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movies"
          className="w-[20rem] bg-slate-200 border p-2 rounded-lg"
        />
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              fav={watchList.some((movieObj) => movieObj.id === movie.id)}
              title={movie.title}
              poster={BASE_URL + movie.backdrop_path}
            />
          ))
        ) : (
          <h2 className="text-center text-gray-500">No movies found.</h2>
        )}
      </div>
      <Paging />
    </>
  );
}