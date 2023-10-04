import style from "./cardConteiner.module.css"
export default function CardShopping(){


    let count = 1

    return(<div className={style.cardConteiner}>
        
        <div className={style.image}><img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="" /></div>
       <div className={style.head}>
       <h4>Nombre del producto</h4>
        <button className={style.btnDelete}>eliminar</button>
       </div>

        <div className={style.counter}>
            <button className={style.btnCount}>-</button>
            <p>{count}</p>
            <button className={style.btnCount}>+</button>
        </div>

        <div className={style.price}>
            <p>$12.313</p>
        </div>

    </div>)
}