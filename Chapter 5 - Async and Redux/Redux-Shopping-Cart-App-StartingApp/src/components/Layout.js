import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
const Layout = () => {
  let itemslist = useSelector(state => state.cart.itemslist);
  let total = 0;
  if(itemslist){
    itemslist.map(i => {
        total = total + i.totalprice;
    });
  }

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
