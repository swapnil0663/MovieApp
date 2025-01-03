import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Movie from "./Components/Movie";
import Navbar from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import TBan from "./Components/TBan";
import MovieContext from "./Context/MovieContext";
import PagingContext from "./Context/PagingContext";
import PagingSlice from "./redux/PagingSlice";


function App() {
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );

  // const [pageno, setPage] = useState(1);
  // const handleprev = () => {
  //   if (pageno > 1) {
  //     setPage(pageno - 1);
  //   }
  // };
  // const handlenext = () => {
  //   setPage(pageno + 1);
  // };

  const addToWatchList = (movieToadd) => {
    const newWatchList = [...watchList, movieToadd];
    setWatchList(newWatchList);
  };

  const removeFromWatchList = (movieToRemove) => {
    const newWatchList = watchList.filter(
      (movieObj) => movieObj.id !== movieToRemove.id
    );
    setWatchList(newWatchList);
  };

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <BrowserRouter>
      <Navbar />

      <MovieContext.Provider
        value={{ watchList, addToWatchList, removeFromWatchList, setWatchList }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <TBan />
                <PagingContext.Provider
                  value={{ pageno, handleprev, handlenext }}
                >
                  <Movie
                  // watchList={watchList}
                  // addToWatchList={addToWatchList}
                  // removeFromWatchList={removeFromWatchList}
                  />
                </PagingContext.Provider>
              </>
            }
          />
          <Route
            path="/watchList"
            element={
              <WatchList
              // movies = {watchList}
              // removeFromWatchList = {removeFromWatchList}
              // setWatchList={setWatchList}
              />
            }
          />
        </Routes>
      </MovieContext.Provider>
    </BrowserRouter>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
// API -> 14915bb7694a0701b51a3b7146b944e2
