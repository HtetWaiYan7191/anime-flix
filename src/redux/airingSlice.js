import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: '',
    value: []
}

export const fetchAiringAnime = createAsyncThunk('airing/fetchAiringAnime', async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/manga');
    if(!response.ok) {
        throw new Error('Network response was not ok')
    }
    const result = await response.json();
    console.log(result)
    return result.data  ;
})

const airingSlice = createSlice({
    name: 'airingAnime',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchAiringAnime.fulfilled, (state, action) => {
            state.value = action.payload;
        })
    }
});

export default airingSlice.reducer;