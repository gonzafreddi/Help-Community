import style from "./userProfile.module.css"
import { CardInfoUser } from "../cardInfo/cardInfoUser"
export default function UserProfile(){
    return(<div className={style.conteiner}>
     <div className={style.center}>
     <div className={style.userConteiner} >
        <p>Informacion Personal</p>
      <div className={style.userData}>

            <div className={style.imgUserCont}>
                <div className={style.imgsize}>
                <img src="https://cdn-icons-png.flaticon.com/256/9549/9549704.png" alt="" />
                </div>
            </div>

            <div className={style.text}>
            <h2>Nombre Apellido</h2>
            <p>usuariodedhelpComunnity@gmail.com</p>
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
          <CardInfoUser
         h5={"Historial"}
         p={"Historial de todas tus transacciones"}
         icon={"https://cdn-icons-png.flaticon.com/256/10994/10994652.png"}
         />
          <CardInfoUser
         h5={"Comunicaciones"}
         p={"Elegi que tipo de informacion deseas recibir"}
         icon={"https://cdn-icons-png.flaticon.com/256/8748/8748531.png"}/>
        </div>
      
     </div>
    </div>)
}