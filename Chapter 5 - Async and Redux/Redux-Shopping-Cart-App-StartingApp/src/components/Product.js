import React from "react";
import { cartActions } from "../store/Cart-Slicer";
import { useDispatch } from "react-redux";
import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addItem = () =>{
    dispatch(cartActions.addCart({
      id,
      price,
      name,
    }))
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addItem}>Add to cart</button>
    </div>
  );
};

export default Product;
