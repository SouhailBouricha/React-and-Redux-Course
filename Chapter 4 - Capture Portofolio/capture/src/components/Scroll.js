import { useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Scroll = () =>{
    const controles = useAnimation();
    const [element,view] = useInView({threshold: 0.5});
    if(view){
        controles.start("show");
    }
    else{
        controles.start("hiden");
    }
    return [element,controles];
}
export default Scroll;