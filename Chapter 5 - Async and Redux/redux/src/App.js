import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useRef } from 'react';
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inpu = useRef(null);
  const Increment = () => {
    dispatch({type: "INC"});
  }
  const Desincrement = () => { 
    dispatch({type: "DESINC"});
  }
  const Addby = () => { 
    dispatch({type: "ADDBY",pyload : Number(inpu.current.value) ? Number(inpu.current.value) : 0});
  }
  return (
    <div className="App">
      <h1>counter app</h1>
      <h2>{counter}</h2>
      <input ref={inpu} type="text"/>
      <button onClick={Increment}>Increment</button>
      <button onClick={Desincrement}>Desincrement</button>
      <button onClick={Addby}>Add</button>
    </div>
  );
}

export default App;
