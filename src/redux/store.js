import { configureStore } from "@reduxjs/toolkit";
import popularSliceReducer from "./popularSlice";
import airingSliceReducer from './airingSlice';

const store = configureStore({
    reducer: {
        popular: popularSliceReducer,
        airing: airingSliceReducer
    }
})

export default store;