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
                </div>
            </Details>
        </CardSahdow>
    )
}
const CardSahdow = styled(motion.div)`
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
const Details = styled(motion.div)`
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
export default GameDetails;