import {About} from "../Styles";
import styled from "styled-components";
import Toggel from "./Toggel";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from '../annimation';
import Scroll  from './Scroll';
function FaqSection() {
    const [element,controles] = Scroll();
    return (
      <Faq variants={fade} animate={controles} ref={element}>
        <h2>Any Questions <span>FAQ</span></h2>
        <AnimateSharedLayout>
        <Toggel title="HOW DO I START?">
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi! </p>
            </div>
        </Toggel>
        <Toggel title="Daily Schedule">
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi! </p>
            </div>
        </Toggel>
        <Toggel title="Diffrent Payment Methods">
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi! </p>
            </div>
        </Toggel>
        <Toggel title="What Products Do You Offer">
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, animi! </p>
            </div>
        </Toggel>
        </AnimateSharedLayout>
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
  