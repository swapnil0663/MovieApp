import { createSlice } from "@reduxjs/toolkit";

const PagingSlice = createSlice({
    name : "PagingSlice",
    initialState : {
        pageno : 1,
    },
    reducers : {
        handleprev : {
            
        }
    }
})

export default PagingSlice;