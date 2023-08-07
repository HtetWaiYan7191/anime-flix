import { configureStore } from "@reduxjs/toolkit";
import popularSliceReducer from "./popularSlice";
import airingSliceReducer from './airingSlice';
import upcomingSliceReducer from "./upcomingSlice";

const store = configureStore({
    reducer: {
        popular: popularSliceReducer,
        airing: airingSliceReducer,
        upcoming: upcomingSliceReducer,
    }
})

export default store;