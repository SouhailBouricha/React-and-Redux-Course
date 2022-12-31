import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
function GameDetails({name, background_image, released,id}){
    const { details,screenshots} = useSelector(state => state.details);
    return(
        <CardSahdow>
            <Details>
                <div className="stats">
                    <div className="ratings">
                        <h3>{details.name}</h3>
                        <p>Rating : {details.rating}</p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {details.platforms ? details.platforms.map(data => (<h3 key={data.platform.id}>{data.platform.name}</h3>)) : []}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={details.background_image} alt=""  />
                </div>
                <div className="description">
                    <p>{details.description_raw}</p>
                </div>
                <div className="gallery">
                    {screenshots.results ? screenshots.results.map(screen => <img src={screen.image} alt="screen.image" key={screen.id} />) : []}
                </div>
            </Details>
        </CardSahdow>
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
    padding: 2rem 10rem;
    background-color: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`;
export default GameDetails;