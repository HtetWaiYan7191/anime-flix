import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error : '',
    value: [],
    characters: [],
}

export const fetchDetailAnime = createAsyncThunk('detail/fetchDetailAnime', async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    if(!response.ok) {
        throw new Error('Network request denied')
    }
    const result = await response.json();
    return result.data;
})

export const fetchCharacters = createAsyncThunk('detail/fetchCharacters', async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
    if(!response.ok) {
        throw new Error(`Network request denied`)
    }
    const result = await response.json();
    return result.data;
})

const detailSlice = createSlice({
    name: 'detailAnime',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailAnime.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
        });

        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.loading = false;
            state.characters = action.payload;
            
        })
    }
})

export default detailSlice.reducer;