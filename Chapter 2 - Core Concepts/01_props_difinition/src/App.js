import React,{ useState } from 'react';
import "./App.css";
import CreateTwitte from './components/CreateTwitte';
import ListTwittes from "./components/ListTwittes";
function App() {
  const [name, setName] = useState("Sou Hail");
  const message = "Im ok right now !";
  const ClickFun = () => { console.log("HII im souhail") };
  return (
    <div className="App">
      <h1>New Twitter</h1>
      <CreateTwitte />
      <ListTwittes setName={setName} name={name} message={message}/>

    </div>
  );
}

export default App;
