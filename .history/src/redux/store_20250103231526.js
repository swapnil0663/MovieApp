import { configureStore } from "@reduxjs/toolkit";
import PagingSlice from "./PagingSlice";

configureStore({
    reducer: {
        pagingState : PagingSlice.reducer,
    }
})