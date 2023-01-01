import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadDetailsGames } from "../actions/gameDetailes";
import { Link } from "react-router-dom";
import { smallImage } from "../utils";
function Game({name, background_image, released,id}){
    const dispatch = useDispatch();
    const detailsHandler = () =>{
        dispatch(loadDetailsGames(id));
        document.body.style.overflow = "hidden";
    }
    return(
        <GameStyled layoutId={String(id)} onClick={detailsHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`text ${String(id)}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${String(id)}`} src={smallImage(background_image,640)} alt="background" />
            </Link>
        </GameStyled>
    )
}
const GameStyled = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    overflow: hidden;
    border-radius: 1rem;
    cursor: pointer;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
        margin-top: auto;
    }
`;
export default Game;