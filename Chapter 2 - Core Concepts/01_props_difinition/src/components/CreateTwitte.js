import React,{ useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function CreateTwitte({name, setName, twitte ,setTwitte}){
    const updateName = (e) => {
        setName(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        setTwitte([...twitte, {message: name, id : uuidv4() }]);
    }
    return (
        <form onSubmit={submitForm}>
            <textarea cols="50" rows="5" onChange={updateName}></textarea>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateTwitte