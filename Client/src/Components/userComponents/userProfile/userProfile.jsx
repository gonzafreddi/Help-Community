import style from "./userProfile.module.css"
import { useAuth } from "../../../context/AuthContext";
import { CardInfoUser } from "../cardInfo/cardInfoUser"
import Login from "../../Login/Login";
import { Link } from "react-router-dom";
export default function UserProfile(){

  const auth = useAuth();
  console.log(auth.user)
  const { email } = auth.user;
  const {displayName} =auth.user
  const {photoURL} = auth.user







    return(<div className={style.conteiner}>
     {
      email ? 
      <div className={style.center}>
     <div className={style.userConteiner} >
        <p>Informacion Personal</p>
      <div className={style.userData}>

            <div className={style.imgUserCont}>
                <div className={style.imgsize}>
                <img src={photoURL} alt="" />
                </div>
            </div>

            <div className={style.text}>
            <h2>{displayName}</h2>
            <p>{email}</p>
            </div>
        </div>
        <p>Datos cuenta</p>
      </div>
        <div className={style.cardConteiner}>
        <CardInfoUser
         h5={"Mail | Telefono | Nombre del usuario"}
         p={"Datos que representan tu cuenta en helpCommunity"}
         icon={"https://cdn-icons-png.flaticon.com/256/1636/1636046.png"}
         />
         <CardInfoUser
         h5={"Estado de la cuenta"}
         p={"Estado actual de tu cuenta"}
         icon={"https://cdn-icons-png.flaticon.com/256/10340/10340112.png"}
         />
         
          <Link to={`/buys?email=${email}`}>
          <CardInfoUser
         h5={"Historial"}
         p={"Historial de todas tus transacciones"}
         icon={"https://cdn-icons-png.flaticon.com/256/10994/10994652.png"}
         />

          </Link>
          <CardInfoUser
         h5={"Comunicaciones"}
         p={"Elegi que tipo de informacion deseas recibir"}
         icon={"https://cdn-icons-png.flaticon.com/256/8748/8748531.png"}/>
        </div>
      
     </div>
     : <Login/>
     }
    </div>)
}