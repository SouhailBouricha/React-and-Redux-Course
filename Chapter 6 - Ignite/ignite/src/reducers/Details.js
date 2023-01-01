const init = {
    details : { platforms : []},
    screenshots : { results : [] },
    isLoading : true,
}
const DetailsGameReducer = (state = init,actions) =>{
    switch(actions.type){
        case "Details_Games":
            return {...state, 
            details : actions.payload.Details_Games,   
            screenshots : actions.payload.screenshots_Games,   
            isLoading : false,
        };
        case "is_Loading":
            return {...state,    
            isLoading : true,
        };
        default:
            return {...state};
    }
}

export default DetailsGameReducer;