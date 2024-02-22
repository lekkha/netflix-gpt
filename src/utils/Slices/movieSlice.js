import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
        topRatedMovies: null,
        trailerVideo: null,
        movieVideo: null,
        title: null,
        overview: null,

    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMovieVideo: (state, action) => {
            state.movieVideo = action.payload;
        },
        addTitle: (state, action) => {
            state.title = action.payload;
        },
        addOverview: (state, action) => {
            state.overview = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTopRatedMovies, addMovieVideo, addTitle, addOverview } = movieSlice.actions;
export default movieSlice.reducer; 