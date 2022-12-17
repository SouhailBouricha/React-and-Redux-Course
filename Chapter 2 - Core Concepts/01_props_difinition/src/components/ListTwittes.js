import Twitte from "./Twiite";

function ListTwittes({name,message,setName}){
    return (
        <div className="listTwittes">
            <Twitte name={name} message={message} setName={setName}/>
            <Twitte name={name} message={message} setName={setName}/>
            <Twitte name={name} message={message} setName={setName}/>
        </div>
    )
}

export default ListTwittes;