import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/Cart-Slicer";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.Totalquantity);
  const dispatch = useDispatch();
  const showCart = () =>{
    dispatch(cartActions.ShowTheCart());
  }
  return (
    <div onClick={showCart} className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
