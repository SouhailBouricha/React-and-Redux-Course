import React, {useState} from 'react';

function LibrarySong({song}) {
    return (
      <div className="song">
        <img src={song.cover} alt="all" />
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    );
}

export default LibrarySong;