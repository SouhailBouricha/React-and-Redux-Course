import './App.css';
import { useSelector,useDispatch } from 'react-redux';
function App() {
  const counter = useSelector((state) => state.counter);
  const Increment = () => useDispatch({type: "INC"});
  const Desincrement = () => useDispatch({type: "DESINC"});
  return (
    <div className="App">
      <h1>counter app</h1>
      <h2>{counter}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Desincrement}>Desincrement</button>
    </div>
  );
}

export default App;
