const init = {
    details : { },
    screenshots : { },
}
const DetailsGameReducer = (state = init,actions) =>{
    switch(actions.type){
        case "Details_Games":
            return {...state, 
            details : actions.payload.Details_Games,   
            screenshots : actions.payload.screenshots_Games,   
        };
        default:
            return {...state};
    }
}

export default DetailsGameReducer;