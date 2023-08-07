import { configureStore } from "@reduxjs/toolkit";
import popularSliceReducer from "./popularSlice";
import airingSliceReducer from './airingSlice';
import upcomingSliceReducer from "./upcomingSlice";
import detailSliceReducer from "./detailSlice";

const store = configureStore({
    reducer: {
        popular: popularSliceReducer,
        airing: airingSliceReducer,
        upcoming: upcomingSliceReducer,
        detail: detailSliceReducer,
    }
})

export default store;