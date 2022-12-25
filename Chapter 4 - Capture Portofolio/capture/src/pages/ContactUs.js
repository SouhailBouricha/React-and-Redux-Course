import { PageTransition } from "../annimation";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AboutAnim } from "../annimation";
function ContactUs() {
    return (
      <Contact variants={PageTransition} initial="hiden" animate="show" exit="exit" style={{background:"#fff"}}>
        <Title>
          <Hide>
            <motion.h2 variants={AboutAnim}>Get in touch</motion.h2>
          </Hide>
        </Title>
        <div>
          <Hide>
            <Sociaal variants={AboutAnim}>
              <Circel></Circel>
              <h2>Send Us a Message</h2>
            </Sociaal>
          </Hide>
          <Hide>
            <Sociaal variants={AboutAnim}>
              <Circel></Circel>
              <h2>Send Us a Email</h2>
            </Sociaal>
          </Hide>
          <Hide>
            <Sociaal variants={AboutAnim}>
              <Circel></Circel>
              <h2>Social Media</h2>
            </Sociaal>
          </Hide>
        </div>
      </Contact>
    );
}

const Contact = styled(motion.div)`
    padding: 5rem 4rem;
    color: #353535;
    min-height: 90vh;
`;
const Title = styled(motion.div)`
    margin-bottom: 4rem;
    color: black;
`;
const Hide = styled(motion.div)`
    overflow: hidden;
`;
const Circel = styled(motion.div)`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;
const Sociaal = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
      margin: 2rem;
    }
`;
export default ContactUs;
  