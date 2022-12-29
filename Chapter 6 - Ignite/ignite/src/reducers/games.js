const init = {
    popular : [],
    newGames : [],
    upComing : [],
    search  : [],
}
const gameReducr = (state = init,actions) =>{
    switch(actions.type){
        case "Fetch_Games":
            return {...state, popular : actions.payload.data};
        default:
            return {...state};
    }
}

export default gameReducr;