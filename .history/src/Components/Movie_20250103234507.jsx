import { BASE_URL } from "../utils/BaseUrl";
import { useEffect, useContext } from "react";
import axios from "axios";
import Paging from "./Paging";
import MovieCard from "./MovieCard";
import MovieContext from "../Context/MovieContext";
// import PagingContext from "../Context/PagingContext";
import { useSelector } from "react-redux";

export default function Movie() {
  const { watchList } = useContext(MovieContext);
  const {pageno} =useSelector((store) => store.pagingState);

  const {movies,isLoading,error} = useSelector((store) => store.movieState);
  

  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/trending/movie/day?api_key=14915bb7694a0701b51a3b7146b944e2&page=${pageno}`
    //   )
    //   .then((res) => {
    //     setMovies(res.data.results);
    //   });
  }, [pageno]);

  if (isLoading) {
    return <h1> ... Loading </h1>;
  }
  if(error){
    return <h1>Error fetching data</h1>  // Show an error message here if there's an error fetching data.  // Example: return <h1>Error fetching data</h1>;  // Replace this with your own error handling logic.  // You can use the error object from the Redux store to display the error message.  // You can use the useSelector hook to access the error object from the Redux store.  // Example: const { error } = useSelector((store) => store.movieState);  // If error is not null, display the error message.  // Example: if (error) { return <h1>Error fetching data: {error.message}</h1>; }  // Replace this with your own error handling logic.  // You can use the error object from the Redux store to display the error message.  // You can use the useSelector hook to access the error object from the Redux store.  // Example
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
