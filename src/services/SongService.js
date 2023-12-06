import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getSong = createAsyncThunk(
    'songs/getSong',
    async () =>{
        const res = await axios.get('http://localhost:8000/songs');
        return res.data;
    }
)