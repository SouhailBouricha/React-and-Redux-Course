import styled from 'styled-components'

function Twitte({name,message,setName,twitte,setTwitte,author,twittes}){
    const chanchName = () =>{ setName("Bouricha") }
    const suprimme = () =>{
        setTwitte(twittes.filter(t => t.id !== twitte.id));
    }
    return (
        <twitteStyle className="twitte">
            <h1 onClick={chanchName}>{author}</h1>
            <h2>{twitte.message}</h2>
            <button onClick={suprimme}>Delete</button>
            <button>Modify</button>
        </twitteStyle>
    )
}
const twitteStyle = styled.div`
    background-color: red;
`;
export default Twitte;