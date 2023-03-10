import React,{ useState, useEffect } from 'react';
import "./App.css";
import CreateTwitte from './components/CreateTwitte';
import ListTwittes from "./components/ListTwittes";
function App() {
  // const [name, setName] = useState("Sou Hail");
  const message = "Im ok right now !";
  let [name,setName] = useState("");
  let [author,setAuthor] = useState("Souhail");
  let [twitte,setTwitte] = useState([]);
  const ClickFun = () => { console.log("HII im souhail") };
  useEffect(() =>{
    console.log('Hi use Effect');
  },[twitte]);
  return (
    <div className="App">
      <h1>New Twitter</h1>
      <CreateTwitte name={name} setName={setName} twitte ={twitte} setTwitte={setTwitte}/>
      <ListTwittes setName={setName} name={name} message={message} twitte ={twitte} setTwitte={setTwitte} author={author}/>
    </div>
  );
}

export default App;
