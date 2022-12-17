import "./App.css";
import CreateTwitte from './components/CreateTwitte';
import ListTwittes from "./components/ListTwittes";
function App() {
  const name = "Sou";
  const message = "Im ok right now !";
  const ClickFun = () => { console.log("HII im souhail") };
  return (
    <div className="App">
      <h1>New Twitter</h1>
      {/* <CreateTwitte />
      <ListTwittes name={name} message={message}/> */}
      <button onClick={ClickFun}>Click</button>
    </div>
  );
}

export default App;
