
import { ca } from "date-fns/locale"
import { verifyLog } from "./verifyLog"
import axios from "axios"


export const getItem=(key)=>{
   return JSON.parse(localStorage.getItem(key))
}

export const setItem=(key, value)=>{
return localStorage.setItem(key, JSON.stringify(value))
}

export const saveCartDb = async(email) => {
   const emailUser = verifyLog(email);
   if (emailUser) {
      let cart = getItem("cartShop");
      const request = [...cart, {email:email}]
      const data = await axios.post(`http://localhost:3001/shoppingCar`, request)
     
      console.log(data)
      console.log(cart); 
      return cart; 
   } else {
      console.log("Modo Invitado");
      localStorage.clear()
      return null
   }
}


//funcion verifique si el usuario esta logeado
//si esta logeada y hay algo en localStorage guardarlo en la base de datos ,
// si no esta logeado guardar en localStorage
