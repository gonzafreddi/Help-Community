import style from "./productItem.module.css"

export default function ProductItem(props){
    console.log(props)
    console.log("log")
    return(<div className={style.conteiner}>
       
       <div className={style.image}>
       <img src={props.props.picture_url} alt="" />
       </div>
       <div className={style.info}>
       <h1>{props.props.title}</h1>
        <p>Precio unitario: {props.props.unit_price}</p>
        <p>cantidad:  {props.props.quantity}</p>
       </div>
    </div>)
}