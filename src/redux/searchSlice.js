import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: { query: "" },
  reducers: {
    updateSearch: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { updateSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
