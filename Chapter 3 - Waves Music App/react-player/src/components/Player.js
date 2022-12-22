import { useRef,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
function Player({ currentsong, isPlaying ,setIsPlaying }) {
    const audioRef = useRef(null);
    const [songInfo,setSongInfo] = useState({ currentTime : 0, duration : 0 }); 
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
    const TimeAduioHandler = (e) =>{
      setSongInfo({ currentTime : e.target.currentTime, duration : e.target.duration })
    }
    const getTime = (time) =>{
      return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    } 
    const RangeHandeler = (e) =>{
      setSongInfo({...songInfo,currentTime : e.target.value});
      audioRef.current.currentTime = e.target.value;
    };
    return (
      <div className="player">
        <div className="time-control">
            <p className="start-time">{getTime(songInfo.currentTime)}</p>
            <input min='0' max={songInfo.duration} value={songInfo.currentTime} onChange={RangeHandeler} type="range" />
            <p className="end-time">{getTime(songInfo.duration)}</p>
        </div>
        <div className="player-control">
            <FontAwesomeIcon className='step-back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon className='play' size='2x' icon={isPlaying ? faPause : faPlay}  onClick={PlayAduioHandler}/>
            <FontAwesomeIcon className='step-forward' size='2x' icon={faAngleRight} />
        </div>
        <audio onTimeUpdate={TimeAduioHandler} onLoadedMetadata={TimeAduioHandler} src={currentsong.audio} ref={audioRef}></audio>
      </div>
    );
  }
  
  export default Player;
  