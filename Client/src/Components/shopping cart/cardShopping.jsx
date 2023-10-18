import { useState } from "react"
import style from "./cardConteiner.module.css"
import { useDispatch } from "react-redux"
import { removeTocart } from "../../redux/actions/action"
import { addOneToCart, removeOneToCart } from "../../redux/actions/action"
import { Link } from "react-router-dom"
import { addOneToCartDb, removeOneFromCartDb, removeTheCartDb } from "../../utils/localStorage"
// card de cada producto


export default function CardShopping(props){
const {id, name, image, price, rating, stock,quantity, email} = props
console.log(props)
const addOne = (props)=>{
    if(email){
        addOneToCartDb(props)
    }else{
      dispatch(addOneToCart(id))
    }
}
const removeOne = (props)=>{
    if(email){
        removeOneFromCartDb(props)
    }else{
      dispatch(removeOneToCart(id))
    }
}

const remove=(id)=>{
    if(email){
        removeTheCartDb(id)
    }else{
        dispatch(removeOneToCart(id))
    }
}


const dispatch = useDispatch()
    return(<div className={style.cardConteiner}>
        <div className={style.image}>
            <Link to={`/products/detail/${name}`}>
            <img src={image} alt="" />
            </Link>
        </div>
       <div className={style.head}>
       <h4>{name}</h4>
        <button className={style.btnDelete}
        onClick={()=>{remove(props.idCar)}}
        >eliminar</button>
       </div>

        <div className={style.counter}>
            <button value={"-"}className={style.btnCount} onClick={()=>{removeOne(props)}}>-</button>
            <p>{quantity}</p>
            <button value={"+"}className={style.btnCount}  onClick={()=>{addOne(props)}}>+</button>
        </div>
        

        <div className={style.price}>
            <p>${price * quantity}</p>
        </div>

    </div>)
}