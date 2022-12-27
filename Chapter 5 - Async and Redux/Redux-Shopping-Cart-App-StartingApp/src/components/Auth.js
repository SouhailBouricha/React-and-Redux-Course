import React from "react";
import { useDispatch,useSelector } from "react-redux";
import "./Auth.css";
import { AuthActions } from "../store/Auth-Slicer";

const Auth = () => {
  const dispatch = useDispatch();
  const AuthState = useSelector(state => state.auth.isLogede);
  const LoginHandler = (e) =>{
    e.preventDefault();
    dispatch(AuthActions.login());
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={LoginHandler}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
