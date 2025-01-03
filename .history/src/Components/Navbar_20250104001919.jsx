import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    
  },[search])
  return (
    <div className="flex items-center m-4 w-screen justify-between">
      <div className="flex items-center">
        <img
          className="h-12"
          src="https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-24.png"
        />
        <Link className="m-4 text-blue-600 text-3xl font-bold" to="/">
          {" "}
          Movies{" "}
        </Link>
        <Link className="text-blue-600 text-3xl font-bold" to="/watchList">
          {" "}
          WatchList
        </Link>
      </div>
      <input
      value={search}
        className=" w-[20rem] bg-slate-100 border p-2 mx-20 rounded-lg"
        type="text"
        placeholder="Search Movie"
        onChange={(e) => {
            setSearch(e.target.value);  
        }}
      />
    </div>
  );
}
