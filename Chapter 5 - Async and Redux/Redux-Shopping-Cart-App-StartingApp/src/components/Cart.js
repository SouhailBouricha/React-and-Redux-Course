import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.Totalquantity);
  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
