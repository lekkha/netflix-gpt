import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/Slices/userSlice"
import movieReducer from "../utils/Slices/movieSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
    },
});

export default appStore; 