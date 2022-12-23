import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
const Nav = ({LibraryUp,setLibraryUp}) =>{
    const LibraryUpHandler = ()=>{
        setLibraryUp(!LibraryUp);
    };
    return(
        <nav className="nav">
            <h1>Weave</h1>
            <button onClick={LibraryUpHandler}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}
export default Nav;