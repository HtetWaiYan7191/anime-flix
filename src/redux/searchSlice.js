import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error : '',
    value : [],
    airingAnime: [],
    upcomingAnime: [],
}

export const fetchSearchAnime = createAsyncThunk('search/fetchSearchAnime', async (name) => {
        const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`)
        if(!response.ok) {
            throw new Error('Network request denied')
        }
        const result = await response.json();
        const searchAnime = result.data.map((anime) => ({ ...anime, title: anime.title.toLowerCase() }));
        const resultAnime = searchAnime.filter((anime) => anime.title.charAt(0) === name.charAt(0));
        return resultAnime;
})

export const fetchAiringSearchAnime = createAsyncThunk('search/fetchAiringSearchAnime', async (name) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=airing`)
    if(!response.ok) {
        throw new Error('Network request denied')
    }
    const result = await response.json();
    const searchAnime = result.data.map((anime) => ({ ...anime, title: anime.title.toLowerCase() }));
    const resultAnime = searchAnime.filter((anime) => anime.title.charAt(0) === name.charAt(0));
    return resultAnime;
})

export const fetchUpcomingSearchAnime = createAsyncThunk('search/fetchUpcomingSearchAnime', async (name) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?filter=upcoming`)
    if(!response.ok) {
        throw new Error('Network request denied')
    }
    const result = await response.json();
    const searchAnime = result.data.map((anime) => ({ ...anime, title: anime.title.toLowerCase() }));
    const resultAnime = searchAnime.filter((anime) => anime.title.charAt(0) === name.charAt(0));
    return resultAnime;
})

const searchSlice = createSlice({
    name: 'searchAnime',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchSearchAnime.fulfilled, (state, action) => {
            state.loading =false;
            state.value = action.payload;
        });

        builder.addCase(fetchAiringSearchAnime.fulfilled, (state, action) => {
            state.loading =false;
            state.value = action.payload;
        });

        builder.addCase(fetchUpcomingSearchAnime.fulfilled, (state, action) => {
            state.loading =false;
            state.value = action.payload;
        });

    }
})

export default searchSlice.reducer;