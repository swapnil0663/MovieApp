import movieSlice from "./movieSlice"

export default function movieThung(){
    return async function(dispatch) {
        try{
            dispatch(actions)
        }catch(e){

        }
    }
}