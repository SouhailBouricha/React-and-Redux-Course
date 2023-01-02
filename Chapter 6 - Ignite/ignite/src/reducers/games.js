const init = {
    popular : [],
    newGames : [],
    upComing : [],
    search  : [],
}
const gameReducr = (state = init,actions) =>{
    switch(actions.type){
        case "Fetch_Games":
            return {...state, 
            popular : actions.payload.popular_Games,
            newGames : actions.payload.new_Games,
            upComing : actions.payload.upComing_Games,
        };
        case "Fetch_Search":
            return {...state, 
            search : actions.payload.search 
        };
        case "Clear_Search":
            return {...state, 
            search : [] 
        };
        default:
            return {...state};
    }
}

export default gameReducr;