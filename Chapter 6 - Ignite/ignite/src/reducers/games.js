const init = {
    popular : [],
    newGames : [],
    upComing : [],
    search  : [],
}
const gameReducr = (state = init,actions) =>{
    switch(actions.type){
        case "FetchGames":
            return {...state};
        default:
            return {...state};
    }
}

export default gameReducr;