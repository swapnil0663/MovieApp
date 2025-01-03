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
    
  }, [pageno]);

  if (isLoading) {
    return <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}> ... Loading </h1>;
  }
  if(error){
    return <h1>Error fetching data</h1>  
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
