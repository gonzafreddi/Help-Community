import style from "./cardConteiner.module.css"
export default function CardShopping(props){
const {id, name, image, price, rating, stock} = props
console.log(props)
    let count = 1

    return(<div className={style.cardConteiner}>
        
        <div className={style.image}><img src={image} alt="" /></div>
       <div className={style.head}>
       <h4>{name}</h4>
        <button className={style.btnDelete}>eliminar</button>
       </div>

        <div className={style.counter}>
            <button className={style.btnCount}>-</button>
            <p>{count}</p>
            <button className={style.btnCount}>+</button>
        </div>

        <div className={style.price}>
            <p>${price}</p>
        </div>

    </div>)
}