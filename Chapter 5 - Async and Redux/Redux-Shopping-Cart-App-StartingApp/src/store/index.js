import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth-Slicer";
import cartSlice from "./Cart-Slicer";
import uiSlicer from "./ui-slicer";
const store = configureStore({
    reducer : {
        "auth" : AuthSlice.reducer,
        "cart" : cartSlice.reducer, 
        "ui" : uiSlicer.reducer, 
    }
})


export default store;