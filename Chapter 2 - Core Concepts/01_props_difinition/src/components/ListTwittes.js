import Twitte from "./Twiite";

function ListTwittes({name,message,setName,twitte,setTwitte}){
    return (
        <div className="listTwittes">
            {twitte.map((t) => <Twitte />)}
        </div>
    )
}

export default ListTwittes;