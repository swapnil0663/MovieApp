import { configureStore } from "@reduxjs/toolkit";
import PagingSlice from "./PagingSlice";
import movieSlice from "./Movies/movieSlice";

const store = configureStore({
    reducer: {
        pagingState : PagingSlice.reducer,
        movieState : movieSlice.reducer, 
    }
})

export default store;