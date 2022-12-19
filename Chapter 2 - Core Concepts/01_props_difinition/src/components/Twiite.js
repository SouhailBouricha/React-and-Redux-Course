function Twitte({name,message,setName,twitte,setTwitte,author,twittes}){
    const chanchName = () =>{ setName("Bouricha") }
    const suprimme = () =>{
        setTwitte(twittes.filter(t => t !== twitte));
        console.log("suprimmr",twitte,twittes.filter(t => t !== twitte));
    }
    return (
        <div className="twitte">
            <h1 onClick={chanchName}>{author}</h1>
            <h2>{twitte}</h2>
            <button onClick={suprimme}>Delete</button>
            <button>Modify</button>
        </div>
    )
}

export default Twitte;