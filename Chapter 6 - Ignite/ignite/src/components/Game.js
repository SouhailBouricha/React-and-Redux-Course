import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadDetailsGames } from "../actions/gameDetailes";
function Game({name, background_image, released,id}){
    const dispatch = useDispatch();
    const detailsHandler = () =>{
        dispatch(loadDetailsGames(id));
    }
    return(
        <GameStyled onClick={detailsHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={background_image} alt="background" />
        </GameStyled>
    )
}
const GameStyled = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;
export default Game;