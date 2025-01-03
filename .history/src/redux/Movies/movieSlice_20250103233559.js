import { createSlice } from "@reduxjs/toolkit";

    const movieSlice = createSlice({
        name : 'movieSlice',
        initialState : {
            movies : [],
            isLoading : false,
            error : null
        },
        reducers : {
            
        }
    })