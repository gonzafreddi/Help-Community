import styles from "./buy.module.css"
export default function(){
    let total = 1
    return(<div className={styles.buyCont}>
        <div className={styles.resume}><h4>Resumen de la compra</h4></div>
        <div>
            <div className={styles.amount}>
            <p>Productos {total > 1 ? `(${total})` : ''}</p>
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