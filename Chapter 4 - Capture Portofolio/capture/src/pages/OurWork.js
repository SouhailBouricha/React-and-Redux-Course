import styled from "styled-components";
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-small.png'
import theracer from '../img/theracer-small.png'
import { Link } from "react-router-dom";
import { PageTransition } from "../annimation";
import { PhotoAnim,fade,LineAnim,Slider} from "../annimation";
import { motion } from "framer-motion";
import Scroll from "../components/Scroll";
function OurWork() {
    const [element,controles] = Scroll();
    return (
      <Work variants={PageTransition} initial="hiden" animate="show" exit="exit"style={{background:"#fff"}}>
        <Frame1 variants={Slider}></Frame1>
        <Frame2 variants={Slider}></Frame2>
        <Frame3 variants={Slider}></Frame3>
        <Frame4 variants={Slider}></Frame4>
        <Movie variants={fade} animate={controles} ref={element}>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={LineAnim} className="line"></motion.div>
          <Link to={"/OurWork/the-athlete"}>
            <Hide>
              <motion.img variants={PhotoAnim} src={athlete} alt="athlete" />
            </Hide>
          </Link>
        </Movie>
        <Movie variants={fade} animate={controles} ref={element}>
          <h2>The Racer</h2>
          <div className="line"></div>
          <Link to={"/OurWork/the-racer"}>
            <img src={theracer} alt="theracer" />
          </Link>
        </Movie>
        <Movie variants={fade} animate={controles} ref={element}>
          <h2>Good Times</h2>
          <div className="line"></div>
          <Link to={"/OurWork/good-times"}>
            <img src={goodtimes} alt="goodtimes" />
          </Link>
        </Movie>
      </Work>
    );
}
const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 4rem;
    h2{
      padding: 1rem 0rem;
    }
`;
const Hide = styled(motion.div)`
    overflow: hidden;
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
    object-fit: cover;
    height: 70vh;
  }
  `;
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  width: 100%;
  left: 0;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
  