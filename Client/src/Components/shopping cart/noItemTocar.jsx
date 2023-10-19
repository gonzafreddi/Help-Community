import styles from "./noitem.module.css"
import { Link } from "react-router-dom"
export default function NoItemTocart(){
    return (<div className={styles.conteiner}>
        
        <div className={styles.contenido}>
        <img src="https://cdn-icons-png.flaticon.com/256/10241/10241180.png" alt="" />
        <p>¡Comienza un nuevo carrito de compras!</p>
        <Link to={"/products"}>
    
          <button>Descubrir</button>
            </Link>
         </div>
    </div>)
}