import style from "./cardConteiner.module.css"

export default function CardShopping(props){
const {id, name, image, price, rating, stock,quantity} = props
console.log(name)
    return(<div className={style.cardConteiner}>
   
        <div className={style.image}><img src={image} alt="" /></div>
       <div className={style.head}>
       <h4>{name}</h4>
        <button className={style.btnDelete}>eliminar</button>
       </div>

        <div className={style.counter}>
            <button className={style.btnCount}>-</button>
            <p>{quantity}</p>
            <button className={style.btnCount} >+</button>
        </div>
        

        <div className={style.price}>
            <p>${price}</p>
        </div>

    </div>)
}