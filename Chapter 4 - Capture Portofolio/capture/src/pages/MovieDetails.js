import styled from "styled-components";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"
import { MovieState } from "../movieState";
import {} from 'uu'
function MovieDetails() {
    const [movies,setMovies] = useState(MovieState());
    const [movie,setMovie] = useState(null);
    const history = useParams().id;
    useEffect(() =>{
        const result = movies.filter(m => m.url === history)[0];
        setMovie(result);
    }, [movies, history]);
    return (<>
        {movie && (
        <Details>
            <HeadLine>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="main Img" />
            </HeadLine>
            <Awards>
                {movie.awards.map((award) => <Award title = {award.title} description = {award.description}/>)}
            </Awards>
        </Details>
        )}</>);
}
const Details = styled.div`
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
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Awards = styled.div`
        color: white;
`;
const Award = ({title,description}) =>{
    return(
        <div>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </div>
    )
}
export default MovieDetails;