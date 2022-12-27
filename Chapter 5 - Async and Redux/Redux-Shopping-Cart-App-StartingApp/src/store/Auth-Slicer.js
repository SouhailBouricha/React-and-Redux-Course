import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name : "Auth",
    initialState : { isLogede : false }, 
    reducers : {
        login(state, actions){
            state.isLogede = true;
        },
        logout(state, actions){
            state.isLogede = false;
        }
    }
})
export const AuthActions = AuthSlice.actions; 
export default AuthSlice;

