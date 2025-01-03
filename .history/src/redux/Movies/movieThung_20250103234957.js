import movieSlice from "./movieSlice"

const actions = movieSlice.actions
export default function movieThung(){
    return async function(dispatch) {
        try{
            dispatch(actions)
        }catch(e){

        }
    }
}