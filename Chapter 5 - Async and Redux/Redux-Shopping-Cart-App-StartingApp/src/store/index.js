import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth-Slicer";
import cartSlice from "./Cart-Slicer";
const store = configureStore({
    reducer : {
        "auth" : AuthSlice.reducer,
        "cart" : cartSlice.reducer, 
    }
})


export default store;