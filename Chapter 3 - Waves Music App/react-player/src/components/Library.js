import React, {useState} from 'react';
import { v4 as uuidv4 } from "uuid";
import LibrarySong from './LibrarySong';

function Library({ songs }) {
    return (
      <div className="Library">
        {/* {console.log(songs)} */}
        {songs().map(song => <LibrarySong key={uuidv4()} song={song} />) }
      </div>
    );
  }
  
  export default Library;
  