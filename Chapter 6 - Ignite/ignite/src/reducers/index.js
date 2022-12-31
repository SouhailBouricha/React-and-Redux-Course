import { combineReducers } from "redux"
import gameReducr from "./games";
import DetailsGameReducer from "./Details";
const rootReducers = combineReducers({
    game : gameReducr,
    details : DetailsGameReducer,
});

export default rootReducers;