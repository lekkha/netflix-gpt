import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/Slices/userSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore; 