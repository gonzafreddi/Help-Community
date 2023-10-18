import styles from "./userProfile.module.css"
import { useAuth } from "../../../context/AuthContext";
import { CardInfoUser } from "../cardInfo/cardInfoUser"
import Login from "../../Login/Login";
import { Link } from "react-router-dom";
import axios from 'axios';

import { useState, useEffect } from "react";


export default function UserProfile(){

  const auth = useAuth();
  console.log(auth.user)
  const { email } = auth.user;
  const {displayName} =auth.user
  const {photoURL} = auth.user

  const [userAdmin, setUserAdmin] = useState(false);

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener la lista de usuarios
    axios.get('/user') // Reemplaza '/api/getUsers' con la URL de tu endpoint real
      .then((response) => {
        const data = response.data; // Obtiene los datos directamente desde la respuesta
        // Encuentra al usuario actual por su correo electrónico
        const currentUser = data.find((user) => user.email === email);
        if (currentUser) {
          // Establece el estado userAdmin basado en el valor de userAdmin del usuario actual
          setUserAdmin(currentUser.userAdmin);
        }
      })
      .catch((error) => {
        console.error('Error al obtener la lista de usuarios', error);
      });
  }, [email]);

    return(<div className={styles.conteiner}>
     {
      email ? 
      <div className={styles.center}>
     <div className={styles.userConteiner} >
        <p>Informacion Personal</p>
      <div className={styles.userData}>

            <div className={styles.imgUserCont}>
                <div className={styles.imgsize}>
                <img src={photoURL ? photoURL : "https://cdn-icons-png.flaticon.com/256/3682/3682323.png"} alt="" />
                </div>
            </div>

            <div className={styles.text}>
            <h2>{displayName}</h2>
            <p>{email}</p>
            </div>
        </div>
        <p>Datos cuenta</p>
      </div>
        <div className={styles.cardConteiner}>
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

          {userAdmin ? (
              <Link to="/admin/dashboard">
                <CardInfoUser
                  h5={'Panel de Administrador'}
                  p={'Accede al panel de administrador'}
                  icon={'https://cdn-icons-png.flaticon.com/128/295/295128.png'}
                />
              </Link>
            ) : null}


        </div>
     </div>
     : <Login/>
     }
    </div>)
}