import { configureStore,createSlice } from "@reduxjs/toolkit"
const counterSlice = createSlice({
    name : "counter",
    initialState : { counter : 0},
    reducers : {
        increment(state,actions){
            state.counter++
        },
        desincrement(state,actions){
            state.counter--
        },
        AddBY(state,actions){
            state.counter =+ 10
        }
    }
}) 
export const actions = counterSlice.actions;
const store = configureStore({
    reducer : counterSlice.reducer,
})

export default store;