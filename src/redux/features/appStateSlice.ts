import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";

type ApperState = {
    apperState: string
}

const initialState: ApperState = {
    apperState: ""
}

export const appStateSlice = createSlice({
    name:"appState",
    initialState,
    reducers:{
        setApperState: (state,action:PayloadAction<string>)=>{
            state.apperState = action.payload
        }
    }
})

export const {
    setApperState
} = appStateSlice.actions

export const apper = (state: RootState) => state.appState

export default appStateSlice.reducer;