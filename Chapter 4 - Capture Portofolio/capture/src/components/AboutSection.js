import home1 from '../img/home1.png';
import styled from 'styled-components';
import {About,Discription,Image,Hide} from "../Styles";
function AboutSection() {
    return (
      <About>
        <Discription>
            <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>your <span>Dream</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
            </div>
            <p>Contact us for any photography or videography ideas that you have. we have professionals wuth amazing skills.</p>
            <button>Contact Us</button>
        </Discription>
        <Image>
            <img src={home1} alt="a guy with a camera" />
        </Image>
      </About>
    );
}

  
export default AboutSection;
  