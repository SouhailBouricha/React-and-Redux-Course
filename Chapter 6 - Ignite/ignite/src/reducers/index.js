import { combineReducers } from "redux"
import gameReducr from "./games";
const rootReducers = combineReducers({
    game : gameReducr,
});

export default rootReducers;