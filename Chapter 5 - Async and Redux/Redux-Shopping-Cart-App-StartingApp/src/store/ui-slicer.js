import { createSlice } from "@reduxjs/toolkit";

const uiSlicer = createSlice({
    name : 'ui',
    initialState : {
        notification : null,
    },
    reducers : {
        showNotif(state,actions){
            state.notification = {
                message : actions.payload.message,
                type : actions.payload.type,
                open : actions.payload.open,

            }
        }
    }
}) 

export const uiAction = uiSlicer.actions;

export default uiSlicer;