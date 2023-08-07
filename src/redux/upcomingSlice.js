import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    error: '',
    loading: false,
    value:[]
}

export const fetchUpcomingAnime = createAsyncThunk('upcoming/fetchUpcomingAnime', async () => {
    const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=upcoming');
    if(!response.ok) {
        throw new Error('Network response was not ok')
    }
    const result = await response.json();
    return result.data;
})

const upcomingSlice = createSlice({
    name:'upcomingAnime',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchUpcomingAnime.fulfilled, (state, action) => {
            state.loading =false;
            state.value = action.payload
        })
    }
})

export default upcomingSlice.reducer;