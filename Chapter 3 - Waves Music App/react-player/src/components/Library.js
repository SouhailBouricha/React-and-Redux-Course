import React, {useState} from 'react';
import LibrarySong from './LibrarySong';

function Library({ songs,setCurrentsong,isPlaying,audioRef,setSongs,LibraryUp }) {
    return (
      <div className={`Library ${LibraryUp ? "libraryUp" : ""}`}>
        <div className="head_library">
          <h2>Library</h2>
        </div>
        <div className="library-songs">
          {songs.map(song => <LibrarySong songs={songs} setSongs={setSongs} audioRef={audioRef} isPlaying={isPlaying} setCurrentsong={setCurrentsong} id={song.id}  key={song.id}  song={song} />)}
        </div>
      </div>
    );
}
  
export default Library;
  