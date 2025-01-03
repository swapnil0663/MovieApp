import { useSelector } from "react-redux";
// Other imports...

export default function WatchList() {
  const { watchList: movies, removeFromWatchList } = useContext(MovieContext);
  const searchQuery = useSelector((store) => store.search.query); // Get search query from Redux

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.id}>{/* Render your movie details here */}</div>
        ))
      ) : (
        <h2>No movies found in Watchlist.</h2>
      )}
    </div>
  );
}
