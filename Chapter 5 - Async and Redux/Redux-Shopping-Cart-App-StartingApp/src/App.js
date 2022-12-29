import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import CartItems from "./components/CartItems";
import Notifications from "./components/Notifications";
function App() {
  const AuthState = useSelector(state => state.auth.isLogede);
  const cartState = useSelector(state => state.cart.itemslist);
  const showCart = useSelector(state => state.cart.showCart);
  const cart = useSelector(state => state.cart);
  useEffect(()=>{
    const sendData = async () => {
      const data = await fetch("https://redux-65dc8-default-rtdb.firebaseio.com/cartItems.json",{
        method : "PUT",
        body : JSON.stringify(cart)
      });
      const response = data.json();
    }
    sendData();
  },[cart])
  return (
    <div className="App">
      <Notifications type={"error"} message={"hi"}></Notifications>
    {
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
