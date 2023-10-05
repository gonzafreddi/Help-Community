import { useEffect } from "react"
import styles from "./buy.module.css"
import {  useSelector } from "react-redux/es/hooks/useSelector"


export default function(){

const cart = useSelector((state)=> state.cartShop)

useEffect(()=>{
    console.log(cart)
},[cart])




    return(<div className={styles.buyCont}>
        <div className={styles.resume}><h4>Resumen de la compra</h4></div>
        <div>
            <div className={styles.amount}>
            <p>Productos </p>
                <p>$123231</p>
            </div>
            <div className={styles.amount}>
                <p className={styles.total} >Total</p>
                <p className={styles.total}> $123.123</p>
            </div>
            <div className={styles.btn}>
            <button className={styles.btnBuy}>Comprar</button>
            </div>
        </div>
    </div>)
}