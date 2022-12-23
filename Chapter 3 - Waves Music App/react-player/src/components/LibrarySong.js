import React, {useState} from 'react';
import {playAudio} from "../utils";
function LibrarySong({song, setCurrentsong,isPlaying,audioRef,setSongs,songs,id}) {
  const songHandler = async () =>{
    await setCurrentsong(song);
    if(isPlaying) audioRef.current.play();
    const newSongs = songs.map(s =>{
      if(s.id === id){
        s.active = true;
        return s;
      }
      else{
        s.active = false;
        return s;
      }
    });
    setSongs(newSongs);
  }
  return (
    <div onClick={songHandler} className={`song ${song.active ? "selected" : ""}`}>
      <img src={song.cover} alt="all" />
      <div className="song_Discription">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;