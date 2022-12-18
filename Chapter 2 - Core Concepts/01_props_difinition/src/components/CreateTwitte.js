import React,{ useState } from 'react';
function CreateTwitte(){
    let [name,setName] = useState("");
    const updateName = (e) => {
        setName(e.target.value);
    }
    const addtwitte = (e) => {
        setName(e.target.value);
    }
    return (
        <form className="addTwiite">
            <textarea value={name} onChange={updateName} cols="50" rows="5"></textarea>
            <button onClick={addtwitte}>Submit</button>
            <h1 onClick={ () => setName("") }>Twitte : {name}</h1>
        </form>
    )
}

export default CreateTwitte