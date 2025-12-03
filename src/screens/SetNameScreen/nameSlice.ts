import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    username:'',
}

const userSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setUsername:(state ,action) =>{
            state.username= action.payload;
        },
    }
})

export const userData = ((state:any) => state.name.username)

export const { setUsername } = userSlice.actions;
export default userSlice.reducer
