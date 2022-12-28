import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import CartItems from "./components/CartItems";
function App() {
  const AuthState = useSelector(state => state.auth.isLogede);
  const cartState = useSelector(state => state.cart.itemslist);
  const showCart = useSelector(state => state.cart.showCart);
  console.log(cartState);
  return (
    <div className="App">{
      (!AuthState && <Auth />)
    }
    {
      (AuthState && <Layout /> )
    }
    {
      showCart && (
        <CartItems/>
      )
    }
    </div>
  );
}

export default App;
