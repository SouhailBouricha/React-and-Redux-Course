import { createStore } from "redux";

const reducerFun = (state = {counter : 0}, action) =>{
    if(action.type === "INC"){
        return { counter : state.counter + 1 };
    }
    if(action.type === "DESINC"){
        return { counter : state.counter - 1 };
    }
    if(action.type === "ADDBY"){
        return { counter : state.counter + action.pyload };
    }
    return state;
}

const store = createStore(reducerFun);

export default store;