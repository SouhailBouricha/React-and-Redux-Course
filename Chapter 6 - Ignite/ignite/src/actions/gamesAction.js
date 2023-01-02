import {populatGamesURL,newGamesURL,upComingGamesURL,SearchGamesURL} from "../api"
import axios from "axios";


export const loadGames = () => async (dispatch) =>{
    const popular_Games = await axios.get(populatGamesURL());
    const upComing_Games = await axios.get(newGamesURL());
    const new_Games = await axios.get(upComingGamesURL());
    dispatch({
        type : "Fetch_Games",
        payload : {
            popular_Games : popular_Games["data"]["results"],
            upComing_Games : upComing_Games["data"]["results"],
            new_Games : new_Games["data"]["results"],
        }
    })
}
export const SearchedGames = (game) => async (dispatch) =>{
    const searched_Games = await axios.get(SearchGamesURL(game));
    dispatch({
        type : "Fetch_Search",
        payload : {
            search : searched_Games["data"]["results"],
        }
    })
}