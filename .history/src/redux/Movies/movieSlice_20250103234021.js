import { createSlice } from "@reduxjs/toolkit";

    const movieSlice = createSlice({
        name : 'movieSlice',
        initialState : {
            movies : [],
            isLoading : true,
            error : false
        },
        reducers : {
            setMovies : (state, descObj) => {
                state.movies = action.payload;
                state.isLoading = false;
                state.error = false;
            },
            setLoading : (state) => {
                state.isLoading = true;
                state.error = false;
                state.movies = [];
            },
            setError : (state) => {
                state.error = true;
                state.isLoading = false;
                state.movies = [];
            }
        }
    })

    export default movieSlice;