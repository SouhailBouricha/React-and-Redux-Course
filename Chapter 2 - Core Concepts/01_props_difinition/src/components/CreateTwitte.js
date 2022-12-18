import React,{ useState } from 'react';
function CreateTwitte(){
    let [name,setName] = useState("");
    const updateName = (e) => {
        setName(e.target.value);
    }
    const submitForm = (e) => {
        e.preventdefault();
    }
    return (
        <form onSubmit={submitForm}>
            <textarea value={name} onChange={updateName} cols="50" rows="5"></textarea>
            <h1 onClick={ () => setName("") }>Twitte : {name}</h1>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateTwitte