import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { actions } from './store';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const Increment = () =>{
    dispatch(actions.increment());
  }
  const Desincrement = () =>{
    dispatch(actions.desincrement());
  }
  const Addby = () =>{
    dispatch(actions.AddBY());
  }
  return (
    <div className="App">
      <h1>counter app</h1>
      <h2>{counter}</h2>
      {/* <input ref={inpu} type="text"/> */}
      <button onClick={Increment}>Increment</button>
      <button onClick={Desincrement}>Desincrement</button>
      <button onClick={Addby}>Add</button>
    </div>
  );
}

export default App;
