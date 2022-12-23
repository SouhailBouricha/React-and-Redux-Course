import React, {useState,useRef} from 'react';
//Add Styles
import "./styles/app.scss";
//Add Compnents
import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';
import Nav from './components/Nav';
//Add Utils
import data from './data.js';
function App() {
  const audioRef = useRef(null);
  const [songs,setSongs] = useState(data());
  const [currentsong,setCurrentsong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);
  const [LibraryUp,setLibraryUp] = useState(false);
  
  return (
    <div className={`App ${LibraryUp ? "libraryActive" : ""}`}>
      <Nav LibraryUp={LibraryUp} setLibraryUp={setLibraryUp} />
      <Song currentsong={currentsong} />
      <Player setSongs={setSongs} setCurrentsong={setCurrentsong} songs={songs} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentsong={currentsong}/>
      <Library LibraryUp={LibraryUp} setSongs={setSongs} audioRef={audioRef} isPlaying={isPlaying} songs={songs} setCurrentsong={setCurrentsong}/>
    </div>
  );
}

export default App;
