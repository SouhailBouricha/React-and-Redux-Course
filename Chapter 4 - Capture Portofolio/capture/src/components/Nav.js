import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Nav = () =>{
    const { pathname } = useLocation();
    return(
        <NavStyled>
            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line transition={{duration: 1}} initial={{width: "0%"}} animate={{width: pathname === "/" ? "50%" : ""}}/>
                </li>
                <li>
                    <Link to="/OurWork">2. Our Work</Link>
                    <Line transition={{duration: 1}} initial={{width: "0%"}} animate={{width: pathname === "/OurWork" ? "50%" : ""}}/>

                </li>
                <li>
                    <Link to="/ContactUs">3. Contact Us</Link>
                    <Line transition={{duration: 1}} initial={{width: "0%"}} animate={{width: pathname === "/ContactUs" ? "50%" : ""}}/>
                </li>
            </ul>
        </NavStyled>
    )
}
const Line = styled(motion.div)`
    height: 0.3rem;
    width: 0%;
    background-color: #23d997;
    position: absolute;
    bottom: -80%;
    left: 63%;
    @media screen and (max-width:1400px){
        left: 0;
    }
 `;
const NavStyled = styled.nav`
    display: flex;
    min-height: 10vh;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #282828;
    @media screen and (max-width:1400px){
        flex-direction: column;
        padding: 2rem 1rem;
        #logo{
            display: inline-block;
            margin: 1rem;
        }
        ul{
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li{
                padding: 0rem;
            }
        }
    }
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.5rem;
        font-family: "Lobster", sans-serif;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`;
export default Nav;