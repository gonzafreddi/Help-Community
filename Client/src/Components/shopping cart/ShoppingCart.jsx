import Buy from "./buy"
import CardShopping from "./cardShopping"
import style from "./shoppingCart.module.css"
import { useSelector } from "react-redux"
export default function ShoppingCart(){

    const cart = useSelector((state)=> state.cartShop)
    console.log("log de carrito",cart)
    return(<div className={style.conteiner}>
        <div className={style.cont}>
       <div className={style.items}>
         
       {
            cart?.map((e)=>{
            return<CardShopping
            id={e.id}
            name={e.nombre}
            price={e.precio}
            rating={e.rating}
            stock={e.stock}
            image={e.imagen}
            />
            })
        }
       </div>
        <Buy/>
        </div>
    </div>)
}