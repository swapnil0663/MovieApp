import movieSlice from "./movieSlice"

const action = movieSlice.actions
export default function movieThung(){
    return async function(dispatch) {
        try{
            dispatch(action.setLoading());
            axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=14915bb7694a0701b51a3b7146b944e2&page=${pageno}`
      )
        }catch(error){
            dispatch(action.setError());
        }
    }
}