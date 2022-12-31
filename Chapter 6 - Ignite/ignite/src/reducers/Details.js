const init = {
    details_Games : { },
}
const DetailsGameReducer = (state = init,actions) =>{
    switch(actions.type){
        case "Details_Games":
            return {...state, 
            details_Games : actions.payload.details_Games,   
        };
        default:
            return {...state};
    }
}

export default DetailsGameReducer;