import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../utils";
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

function GameDetails({name, background_image, released,pathId}){
    const { details,screenshots, isLoading} = useSelector(state => state.details);
    const navigate = useNavigate();
    const shadowHandler = (e) =>{
        if(e.target.classList.contains("shadow")){
            document.body.style.overflow = "auto";
            navigate("/");
        }
    }
    const GetStars = () =>{
        const stars = [];
    }
    const GetIcon = (name) =>{
        switch(name){
            case "Xbox One":
                return xbox;
            case "Xbox Series S/X":
                return xbox;
            case "PlayStation 4":
                return playstation;
            case "PlayStation 5":
                return playstation;
            case "PC":
                return steam;
            case "Nintebdo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }
    return(
        <>
        {!isLoading && (
        <CardSahdow onClick={shadowHandler} className="shadow">
            <Details layoutId={pathId}>
                <Stats>
                    <div className="ratings">
                        <motion.h3 layoutId={`text ${pathId}`}>{details.name}</motion.h3>
                        <p>Rating : {details.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {details.platforms ? details.platforms.map(data => (<img alt={data.platform.name} src={GetIcon(data.platform.name)} key={data.platform.id}/>)) : []}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`} src={smallImage(details.background_image,1280)} alt=""  />
                </Media>
                <Description>
                    <p>{details.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screenshots.results ? screenshots.results.map(screen => <img src={smallImage(screen.image,1280)} alt="screen.image" key={screen.id} />) : []}
                </div>
            </Details>
        </CardSahdow>
        )}
        </>
    )
}
const CardSahdow = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    overflow-y: scroll;
    &::-webkit-scrollbar{
            width: 0.5rem;
        }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background-color: white;
    }
`;
const Details = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background-color: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`;
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Info = styled(motion.div)`
    text-align: center;
`;
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img:not(:nth-child(1)){
        margin-left: 3rem;
    }
`;
const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
    }
`;
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;
export default GameDetails;