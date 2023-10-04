import Buy from "./buy"
import CardShopping from "./cardShopping"
import style from "./shoppingCart.module.css"

export default function ShoppingCart(){
    return(<div className={style.conteiner}>
        <div className={style.cont}>
        
        <CardShopping/>
        <Buy/>
        </div>
    </div>)
}