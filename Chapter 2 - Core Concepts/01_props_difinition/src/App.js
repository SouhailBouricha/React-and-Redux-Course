import React,{ useState } from 'react';
import "./App.css";
import CreateTwitte from './components/CreateTwitte';
import ListTwittes from "./components/ListTwittes";
function App() {
  // const [name, setName] = useState("Sou Hail");
  const message = "Im ok right now !";
  let [name,setName] = useState("");
  let [twitte,setTwitte] = useState([]);
  const ClickFun = () => { console.log("HII im souhail") };
  return (
    <div className="App">
      <h1>New Twitter</h1>
      <CreateTwitte name={name} setName={setName} twitte ={twitte} setTwitte={setTwitte}/>
      <ListTwittes setName={setName} name={name} message={message} twitte ={twitte} setTwitte={setTwitte}/>
    </div>
  );
}

export default App;
