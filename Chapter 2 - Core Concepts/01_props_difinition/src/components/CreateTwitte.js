import React,{ useState } from 'react';
function CreateTwitte({name, setName, twitte ,setTwitte}){
    const updateName = (e) => {
        // setName(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        setTwitte([...twitte, name]);
    }
    return (
        <form onSubmit={submitForm}>
            <textarea value={name} onChange={updateName} cols="50" rows="5"></textarea>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateTwitte