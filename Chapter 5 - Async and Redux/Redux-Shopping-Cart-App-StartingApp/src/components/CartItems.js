import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartState = useSelector(state => state.cart.itemslist);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {
            cartState.map(item => <CartItem total={item.totalprice} quantity={item.quantity} key={item.id} id={item.id} price={item.price} name={item.name} />)
          }
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
