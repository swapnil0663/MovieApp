import { configureStore } from "@reduxjs/toolkit";
import PagingSlice from "./PagingSlice";

const store = configureStore({
    reducer: {
        pagingState : PagingSlice.reducer,
    }
})

export default store;