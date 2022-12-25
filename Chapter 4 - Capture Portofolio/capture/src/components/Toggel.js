import { useState } from "react";
const Toggel = ({ children,title }) =>{
    const [togglEff,setTogglEff] = useState(false);
    return(
        <div onClick={() => setTogglEff(!togglEff)} className="question">
            <h4>{title}</h4>
            {togglEff ? children : ""}
            <div className="faq-line"></div>
        </div>
    )
}

export default Toggel;