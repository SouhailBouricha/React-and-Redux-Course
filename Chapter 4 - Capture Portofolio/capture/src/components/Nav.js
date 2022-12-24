import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () =>{
    return(
        <NavStyled>
            <h1>
                <Link id="logo" to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/OurWork">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/ContactUs">3. Contact Us</Link>
                </li>
            </ul>
        </NavStyled>
    )
}
const NavStyled = styled.nav`
    display: flex;
    min-height: 10vh;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    background: #282828;
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