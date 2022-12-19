import Twitte from "./Twiite";

function ListTwittes({name,message,setName,twitte,setTwitte,author}){
    return (
        <div className="listTwittes">
            {twitte.map((t) => <Twitte key={t.id} twittes={twitte} twitte={t} author={author} setTwitte={setTwitte}/>)}
        </div>
    )
}

export default ListTwittes;