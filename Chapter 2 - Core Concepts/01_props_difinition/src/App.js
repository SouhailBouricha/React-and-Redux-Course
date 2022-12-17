import "./App.css";
import CreateTwitte from './components/CreateTwitte';
import ListTwittes from "./components/ListTwittes";
import Twitte from "./components/Twiite";
function App() {
  return (
    <div className="App">
      <h1>New Twitter</h1>
      <CreateTwitte />
      <ListTwittes>
        <Twitte />
        <Twitte />
        <Twitte />
        <h1>rgs</h1>
      </ListTwittes>
    </div>
  );
}

export default App;
