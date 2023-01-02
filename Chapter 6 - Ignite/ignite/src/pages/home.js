import { useEffect } from "react";
import { loadGames } from "../actions/gamesAction";
import { useDispatch, useSelector } from "react-redux";
import { motion,AnimatePresence,AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import Game from "../components/Game";
import { loadDetailsGames } from "../actions/gameDetailes";
import GameDetails from "../components/GameDetails";
import { useLocation } from "react-router-dom";
function Home(){
    const dispatch = useDispatch();
    useEffect(() =>{
    dispatch(loadGames());
    // dispatch(loadDetailsGames(2));
    },[dispatch])
    const {popular,newGames,upComing,search} = useSelector(state => state.game);
    const location = useLocation();
    const path = location.pathname.split('/')[2]; 
    return(
        <GameList>
            <AnimateSharedLayout>
                <AnimatePresence>
                    {path && <GameDetails pathId={path}/>}
                </AnimatePresence>
                {
                    search.length ? (
                        <>
                        <h2>Search Games</h2>
                        <Games>
                            {search.map(game => <Game key={game.id} id={game.id} name={game.name} background_image={game.background_image} released={game.released} />)}
                        </Games>
                        </>
                    ) : ""
                }   
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => <Game key={game.id} id={game.id} name={game.name} background_image={game.background_image} released={game.released} />)}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => <Game key={game.id} id={game.id} name={game.name} background_image={game.background_image} released={game.released} />)}
                </Games>
                <h2>Up Coming Games</h2>
                <Games>
                    {upComing.map(game => <Game key={game.id} id={game.id} name={game.name} background_image={game.background_image} released={game.released} />)}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px,1fr));
    column-gap: 3rem;
    row-gap: 5rem;
`;
export default Home;