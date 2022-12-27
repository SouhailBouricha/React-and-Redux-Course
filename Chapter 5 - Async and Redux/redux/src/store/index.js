import { createStore } from "redux";

const reducerFun = (state = {counter : 10}, action) =>{
    if(action.type === "INC"){
        return { counter : state.counter + 1 };
    }
    if(action.type === "DESINC"){
        return { counter : state.counter - 1 };
    }
    return state;
}

const store = createStore(reducerFun);

export default store;