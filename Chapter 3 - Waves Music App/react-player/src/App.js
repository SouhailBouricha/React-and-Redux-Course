//Add Styles
import "./style/app.scss";
//Add Compnents
import Player from "./components/Player";
import Song from "./components/Song";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
