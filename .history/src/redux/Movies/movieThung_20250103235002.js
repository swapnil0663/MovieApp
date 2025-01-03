import movieSlice from "./movieSlice"

const action = movieSlice.actions
export default function movieThung(){
    return async function(dispatch) {
        try{
            dispatch(actions)
        }catch(e){

        }
    }
}