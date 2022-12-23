import home1 from '../img/home1.png';
import styled from 'styled-components';
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
const About = styled.div`
    display: flex;
    min-height: 90vh;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: white;
`;
const Discription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;
const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        height: 80vh;
        width: 100%;
        object-fit: cover;
    }
`;
  
const Hide = styled.div`
    overflow: hidden;
`;
  
export default AboutSection;
  