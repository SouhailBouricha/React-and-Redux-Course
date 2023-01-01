import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function GameDetails({name, background_image, released,id}){
    const { details,screenshots, isLoading} = useSelector(state => state.details);
    const navigate = useNavigate();
    const shadowHandler = (e) =>{
        if(e.target.classList.contains("shadow")){
            document.body.style.overflow = "auto";
            navigate("/");
        }
    }
    return(
        <>
        {!isLoading && (
        <CardSahdow onClick={shadowHandler} className="shadow">
            <Details>
                <Stats>
                    <div className="ratings">
                        <h3>{details.name}</h3>
                        <p>Rating : {details.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {details.platforms ? details.platforms.map(data => (<h3 key={data.platform.id}>{data.platform.name}</h3>)) : []}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={details.background_image} alt=""  />
                </Media>
                <Description>
                    <p>{details.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screenshots.results ? screenshots.results.map(screen => <img src={screen.image} alt="screen.image" key={screen.id} />) : []}
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
    img{
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