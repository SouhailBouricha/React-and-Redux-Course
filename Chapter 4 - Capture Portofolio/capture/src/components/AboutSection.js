import home1 from '../img/home1.png';
function AboutSection() {
    return (
      <div>
        <div className="discription">
            <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>Dream</span> come</h2>
                </div>
                <div className="hide">
                    <h2>true.</h2>
                </div>
            </div>
            <p>Contact us for any photography or videography ideas that you have. we have professionals wuth amazing skills.</p>
            <button>Contact Us</button>
        </div>
        <div className="image">
            <img src={home1} alt="a guy with a camera" />
        </div>
      </div>
    );
}
  
export default AboutSection;
  