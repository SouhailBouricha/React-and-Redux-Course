const init = {
    details : { },
}
const DetailsGameReducer = (state = init,actions) =>{
    switch(actions.type){
        case "Details_Games":
            return {...state, 
            details : actions.payload.Details_Games,   
        };
        default:
            return {...state};
    }
}

export default DetailsGameReducer;