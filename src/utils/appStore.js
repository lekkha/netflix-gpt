import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/Slices/userSlice"
import moviesReducer from "../utils/Slices/movieSlice"
import gptReducer from "../utils/Slices/gptSlice"
import configReducer from "./Slices/configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configReducer,
    },
});

export default appStore; 