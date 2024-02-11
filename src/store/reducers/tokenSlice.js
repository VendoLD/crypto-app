import { createSlice } from "@reduxjs/toolkit";
import { fetchTokens } from "../../API/tokenApi";

const initialState = {
    allTokens : [],
    filteredTokens: [],
    isLoading: false,
    isError: false,
    error: {},
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setFilteredTokens(state, action){
            state.filteredTokens = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTokens.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchTokens.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.allTokens = action.payload?.data;
            state.filteredTokens = action.payload?.data;
        })
        .addCase(fetchTokens.rejected, (state, action) => {
            console.log(action)
            state.isLoading = false;
            state.isError = true;
            state.error = action.error
        })
    }
})

export const tokenReducer = tokenSlice.reducer