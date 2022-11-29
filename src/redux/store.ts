import {configureStore} from "@reduxjs/toolkit";
import appState from "./features/appStateSlice";

export const store = configureStore({
    reducer:{
        appState
    }
})

export type RootState = ReturnType<typeof store.getState>