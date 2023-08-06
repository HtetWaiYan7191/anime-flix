import { configureStore } from "@reduxjs/toolkit";
import popularSliceReducer from "./popularSlice";

const store = configureStore({
    reducer: {
        popular: popularSliceReducer,
    }
})

export default store;