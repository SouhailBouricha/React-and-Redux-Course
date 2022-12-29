import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./components/CartItems";
import Notifications from "./components/Notifications";
import { uiAction } from "./store/ui-slicer";
import { cartActions } from "./store/Cart-Slicer";
let firstRunder = true;
function App() {
  const AuthState = useSelector(state => state.auth.isLogede);
  const cartState = useSelector(state => state.cart.itemslist);
  const showCart = useSelector(state => state.cart.showCart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  useEffect( async () =>{
    const data = await fetch("https://redux-65dc8-default-rtdb.firebaseio.com/cartItems.json");
    const response = await data.json();
    dispatch(cartActions.replaceData(response));
    console.log(response);
  },[dispatch]);
  useEffect(()=>{
    if(firstRunder){
      firstRunder = false;
      return;
    }
    dispatch(uiAction.showNotif({message : "Sending Request" , type : "warning", open : true}));
    const sendData = async () => {
      const data = await fetch("https://redux-65dc8-default-rtdb.firebaseio.com/cartItems.json",{
        method : "PUT",
        body : JSON.stringify(cart)
      });
      const response = await data.json();
      dispatch(uiAction.showNotif({message : "Sending Request To Data Base Succsessfully" , type : "success", open : true}));
    }
    sendData().catch(err =>{
      dispatch(uiAction.showNotif({message : "Sending Request To Data Base Failed" , type : "error", open : true}));
    });
  },[cart])
  return (
    <div className="App">
      {
        notification &&
      <Notifications type={notification.type} message={notification.message}></Notifications>
      }
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
