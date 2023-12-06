import {createSlice} from "@reduxjs/toolkit";
import {getSong} from "../../services/SongService";



const initialState = {
    songs: []
}
const songsSlice = createSlice ({
    name: 'songs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSong.fulfilled, (state, action)=>{
            state.songs = action.payload
        });
    }
})