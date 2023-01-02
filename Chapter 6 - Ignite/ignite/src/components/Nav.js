import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { useDispatch } from "react-redux";
import {SearchedGames} from '../actions/gamesAction';
function Nav() {
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const searchHandler = (e) =>{
        e.preventDefault();
        // useEffect(() =>{
            
            // },[dispatch])
        // console.log(text);
        dispatch(SearchedGames(text));
        setText("");
    }
    const inputHandler = (e) =>{
        setText(e.target.value);
    }
    const clearThe = (e) =>{
        dispatch({type : "Clear_Search"});
    }
  return (
    <StyledNav>
        <Logo onClick={clearThe}>
            <img src={logo} alt="logo" />
            <h1>Ignite</h1>
        </Logo>
        <form className="search">
            <input value={text} onChange={inputHandler} type="text" />
            <button onClick={searchHandler} type='submit'>Search</button>
        </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-weight: bold;
        font-family: "Montserrat",sans-serif;
    }
    button{
        font-size: 1.5rem;
        padding: 0.5rem;
        cursor: pointer;
        background-color: #ff7676;
        color: white;
        border: none;
    }
`; 
const Logo = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img{
        width: 2rem;
        height: 2rem;
    }
`; 

export default Nav;