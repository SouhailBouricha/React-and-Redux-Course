import Twitte from "./Twiite";

function ListTwittes({name,message}){
    return (
        <div className="listTwittes">
            <Twitte name={name} message={message}/>
            <Twitte name={name} message={message}/>
            <Twitte name={name} message={message}/>
        </div>
    )
}

export default ListTwittes;