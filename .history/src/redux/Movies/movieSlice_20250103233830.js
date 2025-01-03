import { createSlice } from "@reduxjs/toolkit";

    const movieSlice = createSlice({
        name : 'movieSlice',
        initialState : {
            movies : [],
            isLoading : false,
            error : false
        },
        reducers : {
            setMovies : (state, action) => {
                state.movies = action.payload;
                state.isLoading = false;
                state.error = false;
            },
            setLoading : (state, action) => {
                state.isLoading = action.payload;\
            },
            setError : (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            }
        }
    })

    export default movieSlice;