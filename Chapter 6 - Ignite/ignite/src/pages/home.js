import { useEffect } from "react";
import { loadGames } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

function Home(){
    const dispatch = useDispatch();
    useEffect(() =>{
    dispatch(loadGames());
    },[])
    return(
        <h1>Home</h1>
    )
}

export default Home;