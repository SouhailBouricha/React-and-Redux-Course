import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
function Player() {
    return (
      <div className="player">
        <div className="time-control">
            <p className="start-time">00:00</p>
            <input type="range" />
            <p className="end-time">00:00</p>
        </div>
        <div className="player-control">
            <FontAwesomeIcon className='step-back' size='2x' icon={faAngleLeft} />
            <FontAwesomeIcon className='play' size='2x' icon={faPlay} />
            <FontAwesomeIcon className='step-forward' size='2x' icon={faAngleRight} />
        </div>
      </div>
    );
  }
  
  export default Player;
  