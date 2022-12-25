import { PageTransition } from "../annimation";
import { motion } from "framer-motion";
function ContactUs() {
    return (
      <motion.div variants={PageTransition} initial="hiden" animate="show" exit="exit" style={{background:"#fff"}}>
        <h1>Contact Us</h1>
      </motion.div>
    );
}
  
export default ContactUs;
  