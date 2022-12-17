import React,{ useState } from 'react';
function CreateTwitte(){
    let [name,setName] = useState("");
    const updateName = (e) => {
        setName(e.target.value);
    }
    return (
        <div className="addTwiite">
            <textarea value={name} onChange={updateName} cols="50" rows="5"></textarea>
            <button>Submit</button>
            <h1 onClick={ () => setName("") }>Twitte : {name}</h1>
        </div>
    )
}

export default CreateTwitte