import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {About,Discription,Image,Hide} from "../Styles";
import styled from 'styled-components';

function ServicesSection() {
    return (
        <Servises>
            <Discription>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="clock" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="clock" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="clock" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Discription>
            <Image>
                <img src={home2} alt="home2" />
            </Image>
        </Servises>

    );
}

const Servises = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;    
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }    
    }
`;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default ServicesSection;
  