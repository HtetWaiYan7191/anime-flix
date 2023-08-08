import { configureStore } from "@reduxjs/toolkit";
import popularSliceReducer from "./popularSlice";
import airingSliceReducer from './airingSlice';
import upcomingSliceReducer from "./upcomingSlice";
import detailSliceReducer from "./detailSlice";
import searchSliceReducer from './searchSlice';

const store = configureStore({
    reducer: {
        popular: popularSliceReducer,
        airing: airingSliceReducer,
        upcoming: upcomingSliceReducer,
        detail: detailSliceReducer,
        search: searchSliceReducer,
    }
})

export default store;