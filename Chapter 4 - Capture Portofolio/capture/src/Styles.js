import styled from 'styled-components';

export const About = styled.div`
    display: flex;
    min-height: 90vh;
    align-items: center;
    justify-content: center;
    padding: 5rem 4rem;
    color: white;
`;
export const Discription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;
export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        height: 80vh;
        width: 100%;
        object-fit: cover;
    }
`;
  
export const Hide = styled.div`
    overflow: hidden;
`;