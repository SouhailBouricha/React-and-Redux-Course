import styled from 'styled-components'

const StyleDiv = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;
function Twitte({name,message,setName,twitte,setTwitte,author,twittes}){
    const chanchName = () =>{ setName("Bouricha") }
    const suprimme = () =>{
        setTwitte(twittes.filter(t => t.id !== twitte.id));
    }
    return (
        <StyleDiv>
            <h1 onClick={chanchName}>{author}</h1>
            <h2>{twitte.message}</h2>
            <button onClick={suprimme}>Delete</button>
            <button>Modify</button>
        </StyleDiv>
    )
}
export default Twitte;