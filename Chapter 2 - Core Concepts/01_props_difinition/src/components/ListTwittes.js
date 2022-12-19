import Twitte from "./Twiite";

function ListTwittes({name,message,setName,twitte,setTwitte}){
    return (
        <div className="listTwittes">
            <Twitte name={name} message={message} setName={setName} twitte={twitte} setTwitte={setTwitte}/>
            <Twitte name={name} message={message} setName={setName} twitte={twitte} setTwitte={setTwitte}/>
            <Twitte name={name} message={message} setName={setName} twitte={twitte} setTwitte={setTwitte}/>
        </div>
    )
}

export default ListTwittes;