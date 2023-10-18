import { useEffect } from "react";
import styles from "./buy.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { finalAmount } from "./finalAmount"
import { useAuth } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/actions/action";


export default function Buy() {
  const cart = useSelector((state) => state.cartShop);
  const totalProduct = cart?.length;
  const dispatch = useDispatch()
  const auth = useAuth()
  const email = auth.user.email
  console.log(auth.user.email)
  console.log(email)


  const handleSubmit=(detailProduct)=>{
    const allData = [[...cart],{email},{total: totalAmount}]
    console.log("allData de handleSubmit: ", allData)
    dispatch(createOrder(allData))
}

  useEffect(()=>{
    // window.localStorage.setItem("dataCart", JSON.stringify(cart))
  },[cart])

  console.log(cart)
  const totalAmount = finalAmount(cart);
  
  return (
    <div className={styles.buyCont}>
      <div className={styles.resume}>
        <h4>Resumen de la compra</h4>
      </div>
      <div>
        <div className={styles.amount}>
          <p>Productos</p>
          <p>{totalProduct}</p>
        </div>
        <div className={styles.amount}>
          <p className={styles.total}>Total</p>
          <p className={styles.total}>{totalAmount}</p>
        </div>
        <div className={styles.btn}>
          <button onClick={handleSubmit}className={styles.btnBuy}>Comprar</button>
        </div>
      </div>
    </div>
  );
}
