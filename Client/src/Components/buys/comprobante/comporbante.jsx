import style from "./comprobante.module.css"
import ProductItem from "./productItem";
import { CardInfoUser } from "../../userComponents/cardInfo/cardInfoUser";

export default function Comprobante({props, handlerClose}) {
  const  products  = props.products.items;
  const currentUrl = window.location.href;
  let admin = false
  console.log(props)
  if (currentUrl.includes('admin')) {
    admin = true
    console.log('La URL contiene la palabra "admin".');
  } else {
    admin = false
    console.log('La URL no contiene la palabra "admin".');
  }
//   console.log(products);
 console.log(props.products.transaction)

  return (
    <div className={style.conteinerGrande}>
        <div className={style.conteiner}>
        <div className={style.card}>
       <div className={style.info}>
        <button className={style.close} onClick={handlerClose}>X</button>
        <h1>HelpCommunity</h1>
       <p className={style.back}>Id de compra: {props.id}</p>
        <h3 className={style.state}>Estado: {props.products.status}</h3>
        <h3 className={style.back}>Detalle de estado: {props.products.statusDetail}</h3>
   
       </div>
       <h2 className={style.items}>Items</h2>
        <div>
        {products?.map((item, index) => {
        console.log("log del item",item); // Agregar el console.log aquí
        return (
            
          <CardInfoUser key={index} props={item}
            h5={item.title}
            icon={item.picture_url}
            p={`Cantidad : ${item.quantity} | precio unitario ${item.unit_price}`}
          />
        );
      })}
        </div>
        {
            admin ? <div>
                <h3 className={style.total}>Total: ${props.products.transaction.total_paid_amount}</h3>
                <h3 className={style.total}>Acreditado: ${props.products.transaction.net_received_amount}</h3>
            </div> 
            : 
            <h3 className={style.total}>Total: ${props.products.transaction.total_paid_amount}</h3>
        }

        <div className={style.description}>
        <p>HelpCommunity@gmail.com</p>
        <p>+54 11 3428 5737</p>
        <p>Argentina</p>

        </div>
       </div>
        </div>     
    </div>
  );
}
