import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
function App() {
  const AuthState = useSelector(state => state.auth.isLogede);
  return (
    <div className="App">{
      (!AuthState && <Auth />)
    }
    {
      (AuthState && <Layout /> )
    }
    </div>
  );
}

export default App;
