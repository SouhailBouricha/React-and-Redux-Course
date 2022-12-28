import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import pr
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
function App() {
  const AuthState = useSelector(state => state.auth.isLogede);
  const cartState = useSelector(state => state.cart.itemslist);
  console.log(cartState);
  return (
    <div className="App">{
      (!AuthState && <Auth />)
    }
    {
      (AuthState && <Layout /> )
    }
    </div>
  );
}

export default App;
