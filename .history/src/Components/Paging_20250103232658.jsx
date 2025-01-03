// import { useContext } from "react";
// import PagingContext from "../Context/PagingContext";
import { useSelector } from "react-redux";
import PagingSlice from "../redux/PagingSlice";

const action = 
export default function Paging() {
  const totalPages = (1000/ 20);

  const {pageno, handlenext:handleUp,handleprev:handleDown} = useSelector((store) => store.pagingState);
  return (
    <div className="flex justify-center my-4">
      <button
        onClick={handleDown}
        disabled={pageno <= 1}
        className={`px-4 py-2 bg-gray-200 rounded ${
          pageno <= 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Prev
      </button>
      <span className="px-4 py-2">{pageno}</span>
      <button
        onClick={handleUp}
        disabled={pageno >= totalPages}
        className={`px-4 py-2 bg-gray-200 rounded ${
          pageno >= totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
}
