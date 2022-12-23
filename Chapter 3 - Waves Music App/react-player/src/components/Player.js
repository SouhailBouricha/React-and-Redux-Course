import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
function Player({ currentsong, isPlaying ,setIsPlaying,audioRef,songs,setCurrentsong,setSongs}) {
    const [songInfo,setSongInfo] = useState({ currentTime : 0, duration : 0, animationPercent : 0 }); 
    const TimeAduioHandler = (e) =>{
      setSongInfo({ currentTime : e.target.currentTime, duration : e.target.duration,animationPercent : Math.round(e.target.currentTime / e.target.duration * 100) })
    }
    const getTime = (time) =>{
      return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    } 
    const PlayAduioHandler = () =>{
      if(isPlaying){
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      }
      else{
        audioRef.current.play();
        setIsPlaying(!isPlaying);
      }
    }
    const RangeHandeler = (e) =>{
      setSongInfo({...songInfo,currentTime : e.target.value});
      audioRef.current.currentTime = e.target.value;
    };
    const skipBacjForward = async (diriction) => {
      const currentIndex = songs.findIndex((song) => song.id === currentsong.id );
      if(diriction === "back"){
        const therightone = ((currentIndex - 1) % songs.length) > -1 ? ((currentIndex - 1) % songs.length) : songs.length - 1;
        await setCurrentsong(songs[therightone]);
        updateselect(songs[therightone]);
      }
      else if(diriction === "forward"){
        await setCurrentsong(songs[(currentIndex + 1) % songs.length]);
        updateselect(songs[(currentIndex + 1) % songs.length]);
      }
      if(isPlaying) audioRef.current.play();
    };

    const moveItsEnd = async () =>{
      const currentIndex = await songs.findIndex((song) => song.id === currentsong.id );
      await setCurrentsong(songs[(currentIndex + 1) % songs.length]);
      if(isPlaying) await audioRef.current.play();
    };
    const updateselect = (prevnext) =>{
      const newSongs = songs.map(s =>{
        if(s.id === prevnext.id){
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
      <div className="player">
        <div className="time-control">
            <p className="start-time">{getTime(songInfo.currentTime)}</p>
            <div style={{background: `linear-gradient(to right,${currentsong.color[0]},${currentsong.color[1]})`}} className="track">
              <input min='0' max={songInfo.duration || 0} value={songInfo.currentTime} onChange={RangeHandeler} type="range" />
              <div style={{transform: `translateX(${songInfo.animationPercent}%)`}} className="annimation_track"></div>
            </div>
            <p className="end-time">{getTime(songInfo.duration)}</p>
        </div>
        <div className="player-control">
            <FontAwesomeIcon onClick={() => skipBacjForward('back') } className='step-back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon className='play' size='2x' icon={isPlaying ? faPause : faPlay}  onClick={PlayAduioHandler}/>
            <FontAwesomeIcon onClick={() => skipBacjForward('forward') } className='step-forward' size='2x' icon={faAngleRight} />
        </div>
        <audio onEnded={moveItsEnd} onTimeUpdate={TimeAduioHandler} onLoadedMetadata={TimeAduioHandler} src={currentsong.audio} ref={audioRef}></audio>
      </div>
    );
  }
  
  export default Player;
  