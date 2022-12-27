import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth-Slicer";

const store = configureStore({
    reducer : {
        "auth" : AuthSlice.reducer,
    }
})


export default store;