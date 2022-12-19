function Twitte({name,message,setName,twitte,setTwitte}){
    const chanchName = () =>{ setName("Bouricha") }
    return (
        <div className="twitte">
            <h1 onClick={chanchName}>{name}</h1>
            <p>{twitte}</p>
        </div>
    )
}

export default Twitte;