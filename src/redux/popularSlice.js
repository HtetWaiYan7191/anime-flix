import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error: '',
    value: [],
    searchAnime: [],
};

export const fetchPopularAnime = createAsyncThunk('popular/fetchPopularAnime',  async () => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`);
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result.data;
})

const popularSlice = createSlice({
    name:'popular',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchPopularAnime.fulfilled, (state, action) => {
            state.value = action.payload;
        })
    }
})

export default popularSlice.reducer;