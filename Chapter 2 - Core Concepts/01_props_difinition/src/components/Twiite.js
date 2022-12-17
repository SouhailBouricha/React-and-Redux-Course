function Twitte({name,message,setName}){
    const chanchName = () =>{ setName("Bouricha") }
    return (
        <div className="twitte">
            <h1 onClick={chanchName}>{name}</h1>
            <p>{message}</p>
        </div>
    )
}

export default Twitte;