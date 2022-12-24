import styled from "styled-components";
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-small.png'
import theracer from '../img/theracer-small.png'
import { Link } from "react-router-dom";
function OurWork() {
    return (
      <Work>
        <Movie>
          <h2>The Athlete</h2>
          <div className="line"></div>
          <Link>
            <img src={athlete} alt="athlete" />
          </Link>
        </Movie>
        <Movie>
          <h2>The Racer</h2>
          <div className="line"></div>
          <Link>
            <img src={theracer} alt="theracer" />
          </Link>
        </Movie>
        <Movie>
          <h2>Good Times</h2>
          <div className="line"></div>
          <Link>
            <img src={goodtimes} alt="goodtimes" />
          </Link>
        </Movie>
      </Work>
    );
}
const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 4rem;
    h2{
      padding: 1rem 0rem;
    }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img{
      width: 100%;
      object-fit: cover;
      height: 70vh;
  }
`;
export default OurWork;
  