import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { PageTransition } from "../annimation";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

function AboutUs() {
    return (
      <motion.div variants={PageTransition} initial="hiden" animate="show" exit="exit">
        <ScrollTop />
        <AboutSection/>
        <ServicesSection/>
        <FaqSection/>
      </motion.div>
    );
}
  
export default AboutUs;
  