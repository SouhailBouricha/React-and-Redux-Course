import {About} from "../Styles";
import styled from "styled-components";
function FaqSection() {
    return (
      <Faq>
        <h2>Any Questions <span>FAQ</span></h2>
        <div className="question">
            <h4>HOW DO I START?</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi! </p>
            </div>
            <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>Daily Schedule</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi! </p>
            </div>
            <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>Diffrent Payment Methods</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi! </p>
            </div>
            <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>What Products Do You Offer</h4>
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi! </p>
            </div>
            <div className="faq-line"></div>
        </div>
      </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background-color: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
        p{
            padding: 1rem 0rem;
        }
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;
export default FaqSection;
  