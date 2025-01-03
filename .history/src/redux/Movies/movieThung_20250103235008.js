import movieSlice from "./movieSlice"

const action = movieSlice.actions
export default function movieThung(){
    return async function(dispatch) {
        try{
            dispatch(action.set)
        }catch(e){

        }
    }
}