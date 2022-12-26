import styled from 'styled-components';
import { motion } from 'framer-motion';
export const About = styled(motion.div)`
    display: flex;
    min-height: 90vh;
    align-items: center;
    justify-content: center;
    padding: 5rem 4rem;
    color: white;
    @media screen and (max-width:1400px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`;
export const Discription = styled.div`
    flex: 1;
    z-index: 2;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
    @media screen and (max-width:1400px){
        padding: 0rem;
        button{
            margin: 2rem 0rem 5rem 0rem;
        }
    }
`;
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img{
        height: 80vh;
        width: 100%;
        object-fit: cover;
    }
`;
  
export const Hide = styled.div`
    overflow: hidden;
`;