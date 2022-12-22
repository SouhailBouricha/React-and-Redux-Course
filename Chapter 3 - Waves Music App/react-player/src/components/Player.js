import { useRef,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
function Player({ currentsong, isPlaying ,setIsPlaying }) {
    const audioRef = useRef(null);
    const [songInfo,setSongInfo] = useState({ currentTime : null, duration : null }); 
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
      console.log(e.target.value);
      setSongInfo({...songInfo,currentTime : e.target.value});
    };
    return (
      <div className="player">
        <div className="time-control">
            <p className="start-time">{getTime(songInfo.currentTime)}</p>
            <input onChange={RangeHandeler} type="range" />
            <p className="end-time">{getTime(songInfo.duration)}</p>
        </div>
        <div className="player-control">
            <FontAwesomeIcon className='step-back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon className='play' size='2x' icon={faPlay}  onClick={PlayAduioHandler}/>
            <FontAwesomeIcon className='step-forward' size='2x' icon={faAngleRight} />
        </div>
        <audio onTimeUpdate={TimeAduioHandler} onLoadedMetadata={TimeAduioHandler} src={currentsong.audio} ref={audioRef}></audio>
      </div>
    );
  }
  
  export default Player;
  