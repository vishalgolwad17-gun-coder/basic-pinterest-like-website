import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activetab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setquery: (state, action) => {
      state.query = action.payload;
    },
    setactivetab: (state, action) => {
      state.activetab = action.payload;
    },
    setresults: (state, action) => {
      state.results = action.payload;
      state.loading = false;
      state.error = null;
    },
    setloading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    seterror: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults: (state) => {
      state.results = [];
    },
  },
});

export const { setquery, setloading, setresults, setactivetab, seterror } =
  searchslice.actions;

export default searchslice.reducer;
