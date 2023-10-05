import { useState } from "react"
import style from "./cardConteiner.module.css"
import { useDispatch } from "react-redux"
import { removeTocart } from "../../redux/actions/action"

export default function CardShopping(props){
const {id, name, image, price, rating, stock,} = props
const dispatch = useDispatch()
const [quantity, setQuantity] = useState(props.quantity)

const handleIncrement = () => {
    // Incrementa la cantidad por 1
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    // Disminuye la cantidad por 1, pero asegúrate de que no sea menor que 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


    return(<div className={style.cardConteiner}>
   
        <div className={style.image}><img src={image} alt="" /></div>
       <div className={style.head}>
       <h4>{name}</h4>
        <button className={style.btnDelete}
        onClick={()=>{dispatch(removeTocart(id))}}
        >eliminar</button>
       </div>

        <div className={style.counter}>
            <button value={"-"}className={style.btnCount} onClick={handleDecrement}>-</button>
            <p>{quantity}</p>
            <button value={"+"}className={style.btnCount}  onClick={handleIncrement}>+</button>
        </div>
        

        <div className={style.price}>
            <p>${price * quantity}</p>
        </div>

    </div>)
}