export default function MovieCard({
  movie,
  fav,
  title,
  poster,
  addToWatchList,
  removeFromWatchList,
}) {
  return (
    <div className="hover:scale-110 duration-200 cursor-pointer relative m-4 rounded-[1rem] overflow-hidden">
      <img
        className="h-[20rem] w-[12rem] object-cover "
        alt="Image Not Found "
        src={poster}
      />
      <p className="left-[50%] w-full h-14 font-bold text-xl text-center translate-x-[-50%] bg-[#111827b3] absolute bottom-0 text-white">
        {title}
      </p>
      <div className="absolute top-2 right-2 h-10 w-10 bg-[#111827b3] flex items-center justify-center rounded-lg text-white text-2xl">
        {fav ? (
          <div onClick={() => removeFromWatchList(movie)}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>
        ) : (
          <div onClick={() => addToWatchList(movie)}>
            <i className="fa-solid fa-list"></i>
          </div>
        )}
      </div>
    </div>
  );
}
