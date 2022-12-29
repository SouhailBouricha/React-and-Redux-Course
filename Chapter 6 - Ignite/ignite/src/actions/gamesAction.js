import {populatGamesURL} from "../api"
import axios from "axios";


export const loadGames = () => async (dispatch) =>{
    const data = await axios.get(populatGamesURL());
    dispatch({
        type : "Fetch_Games",
        payload : {data : data["data"]["results"]}
    })
}