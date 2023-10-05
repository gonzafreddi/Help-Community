import Buy from "./buy"
import CardShopping from "./cardShopping"
import style from "./shoppingCart.module.css"
import { useSelector } from "react-redux"
export default function ShoppingCart(){

    const cart = useSelector((state)=> state.cartShop)
    // console.log("log de carrito",cart[0]?.product)
    // const product = cart[0]?.product
    // const quantity = cart[0]?.quantity
    return(<div className={style.conteiner}>
        <div className={style.cont}>
       <div className={style.items}>
         
       {
            cart?.map((e, index)=>{
            return<CardShopping
            key={index}
            id={e.product.id}
            name={e.product.nombre}
            price={e.product.precio}
            rating={e.rating}
            stock={e.product.stock}
            image={e.product.imagen}
            quantity={e.quantity}
            />
            })
        }
       </div>
        <Buy/>
        </div>
    </div>)
}