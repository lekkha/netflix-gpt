import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieName: null,
        movieResults: null,
    },

    reducers: {
        toggleSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieName, movieResults } = action.payload;
            state.movieName = movieName;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer; 