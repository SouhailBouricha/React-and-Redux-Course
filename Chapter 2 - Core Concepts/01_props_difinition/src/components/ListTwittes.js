import Twitte from "./Twiite";

function ListTwittes({name,message,setName,twitte,setTwitte,author}){
    return (
        <div className="listTwittes">
            {twitte.map((t) => <Twitte twittes={twitte} twitte={t} author={author}/>)}
        </div>
    )
}

export default ListTwittes;