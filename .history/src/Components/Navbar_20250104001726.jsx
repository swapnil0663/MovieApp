import { useDispatch } from "react-redux";
import { updateSearch } from "../redux/SearchSlice"; // Create a Redux slice for search functionality
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(updateSearch(e.target.value)); // Update the global search state
  };

  return (
    <div className="flex items-center m-4 w-screen justify-between">
      <div className="flex items-center">
        <img
          className="h-12"
          src="https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-24.png"
          alt="Movie Logo"
        />
        <Link className="m-4 text-blue-600 text-3xl font-bold" to="/">
          Movies
        </Link>
        <Link className="text-blue-600 text-3xl font-bold" to="/watchList">
          WatchList
        </Link>
      </div>
      <input
        className="w-[20rem] bg-slate-100 border p-2 rounded-lg"
        type="text"
        placeholder="Search Movie"
        onChange={handleSearchChange}
      />
    </div>
  );
}
