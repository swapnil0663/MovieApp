import { createSlice } from "@reduxjs/toolkit";

const PagingSlice = createSlice({
    name : "PagingSlice",
    initialState : {
        pageno : 1,
    },
    reducers : {
        handleprev : (State) => {
            if(State.pageno > 1){
                State.pageno -= 1;
            }
        },
        handlenext
    }
})

export default PagingSlice;