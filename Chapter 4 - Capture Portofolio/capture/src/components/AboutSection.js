import home1 from '../img/home1.png';
import {About,Discription,Image,Hide} from "../Styles";
import { motion } from 'framer-motion';
import { AboutAnim,fade,PhotoAnim } from '../annimation';
import Wave from './Wave';
function AboutSection() {
    return (
      <About>
        <Discription>
            <div className="title">
                <Hide>
                    <motion.h2 variants={AboutAnim}>We work to make</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={AboutAnim}>your <span>Dream</span> come</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={AboutAnim}>true.</motion.h2>
                </Hide>
            </div>
            <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. we have professionals wuth amazing skills.</motion.p>
            <motion.button variants={fade}>Contact Us</motion.button>
        </Discription>
        <Image>
            <motion.img variants={PhotoAnim} src={home1} alt="a guy with a camera" />
        </Image>
        <Wave />
      </About>
    );
}

  
export default AboutSection;
  