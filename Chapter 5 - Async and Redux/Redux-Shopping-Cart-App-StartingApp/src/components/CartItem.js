import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/Cart-Slicer";
import "./Cart.css";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const addQuantity = () =>{
    dispatch(cartActions.quantityAdd(id));
  }
  const removeQuantity = () =>{
    dispatch(cartActions.quantityRemove(id));
  }
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={removeQuantity} className="cart-actions">
        -
      </button>
      <button onClick={addQuantity} className="cart-actions">
        +
      </button>
    </div>
  );
};

export default CartItem;
