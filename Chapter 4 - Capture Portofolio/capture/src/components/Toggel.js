import { useState } from "react";
import { motion } from "framer-motion";
const Toggel = ({ children,title }) =>{
    const [togglEff,setTogglEff] = useState(false);
    return(
        <motion.div layout onClick={() => setTogglEff(!togglEff)} className="question">
            <motion.h4 layout>{title}</motion.h4>
            {togglEff ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggel;