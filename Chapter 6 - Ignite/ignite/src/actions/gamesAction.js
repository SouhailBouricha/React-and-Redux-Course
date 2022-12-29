import {populatGamesURL} from "../api"
import axios from "axios";


export const loadGames = () => async (dispatch) =>{
    const data = await axios.get(populatGamesURL());
    return {
        type : "Fetch_Games",
        payload : {data}
    }
}