import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { PageTransition } from "../annimation";
import { motion } from "framer-motion";
function AboutUs() {
    return (
      <motion.div variants={PageTransition} initial="hiden" animate="show" exit="exit">
        <AboutSection/>
        <ServicesSection/>
        <FaqSection/>
      </motion.div>
    );
}
  
export default AboutUs;
  