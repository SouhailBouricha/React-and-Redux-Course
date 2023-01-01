import { DetailsGamesURL,screenshotsGamesURL } from "../api"
import axios from "axios";


export const loadDetailsGames = (id) => async (dispatch) =>{
    dispatch({
        type : "is_Loading"
    })
    const Details_Games = await axios.get(DetailsGamesURL(id));
    const screenshots_Games = await axios.get(screenshotsGamesURL(id));
    dispatch({
        type : "Details_Games",
        payload : {
            Details_Games : Details_Games["data"],
            screenshots_Games : screenshots_Games["data"],
        }
    })
}