import { DetailsGamesURL } from "../api"
import axios from "axios";


export const loadDetailsGames = (id) => async (dispatch) =>{
    const Details_Games = await axios.get(DetailsGamesURL(id));
    dispatch({
        type : "Details_Games",
        payload : {
            Details_Games : Details_Games["data"],
        }
    })
}