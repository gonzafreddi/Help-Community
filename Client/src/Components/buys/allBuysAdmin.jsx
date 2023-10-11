import style from "./buys.module.css"
import { CardInfoUser } from "../userComponents/cardInfo/cardInfoUser"
export function AllBuys(){
    return(<div className={style.conteiner}>
        
      <div className={style.cards}> 
      <h1>Historial de compras</h1>
    <div className={style.cardCont}>
    <CardInfoUser
        icon={"https://i.dummyjson.com/data/products/2/1.jpg"}
        h5={"ipone x"}
        p={"Cantidad: 1 Precio: $299"}
        check={"https://tse1.mm.bing.net/th?id=OIP.8WbIrvh6UlckcGsf7-m2JQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"}
        />
    </div>
    <div className={style.cardCont}>
    <CardInfoUser
        icon={"https://i.dummyjson.com/data/products/2/1.jpg"}
        h5={"ipone x"}
        p={"Cantidad: 1 Precio: $299"}
        check={"https://tse1.mm.bing.net/th?id=OIP.8WbIrvh6UlckcGsf7-m2JQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"}
        />
    </div>
    </div>
    </div>)
}