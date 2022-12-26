import styled from "styled-components";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { MovieState } from "../movieState";
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";
import { PageTransition } from "../annimation";
import ScrollTop from "../components/ScrollTop";
function MovieDetails() {
    const [movies,setMovies] = useState(MovieState());
    const [movie,setMovie] = useState(null);
    const history = useParams().id;
    useEffect(() =>{
        const result = movies.filter(m => m.url === history)[0];
        setMovie(result);
    }, [movies, history]);
    return (<>
        <ScrollTop />
        {movie && (
        <Details variants={PageTransition} initial="hiden" animate="show" exit="exit">
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="main Img" />
            </HeadLine>
            <Awards>
                {movie.awards.map((award) => <Award key={uuidv4()} title = {award.title} description = {award.description}/>)}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="secondaryImg" />
            </ImageDisplay>
        </Details>
        )}</>);
}
const Details = styled(motion.div)`
    color: white;
`;
const HeadLine = styled.div`
    min-height: 100vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-10%);
        @media screen and (max-width:1400px){
            font-size: 200%;
        }
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
        min-height: 80vh;
        display: flex;
        margin: 5rem 4rem;
        align-items: center;
        justify-content: space-around;
        @media screen and (max-width:1400px){
            display: block;
            margin: 2rem;
        }
`;
const AwardStyle = styled.div`
        padding: 3rem;
        h3{
            font-size: 2rem;
        }
        .line{
            width: 100%;
            background-color: #23d997;
            height: 0.5rem;
            margin: 1rem 0rem;
        }
        p{
            padding: 2rem 0rem;
        }
`;
const ImageDisplay = styled.div`
       min-height: 50vh;
       img{
        width: 100%;
        height: 100%;
        object-fit: cover;
       }
`;
const Award = ({title,description}) =>{
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}
export default MovieDetails;