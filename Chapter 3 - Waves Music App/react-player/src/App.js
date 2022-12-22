import React, {useState} from 'react';
//Add Styles
import "./styles/app.scss";
//Add Compnents
import Player from "./components/Player";
import Song from "./components/Song";
//Add Utils
import data from './util.js';
function App() {
  const [songs,setSongs] = useState(data());
  const [currentsong,setCurrentsong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentsong={currentsong} />
      <Player currentsong={currentsong}/>
    </div>
  );
}

export default App;
