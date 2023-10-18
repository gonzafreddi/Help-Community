
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
      console.log(cart); 
      return data; 
   } else {
      console.log("Modo Invitado");
      localStorage.clear()
      return null
   }
}

export const addCartDb = async(product, email)=>{
   console.log(product)
   try {
      const request = [{...product, quantity: 1}, {email:email}]
      console.log(request)
      const data = await axios.post(`http://localhost:3001/shoppingCar`, request)
   } catch (error) {
      console.log(error.message, "caaaaaart")
   }
}
//funcion verifique si el usuario esta logeado
//si esta logeada y hay algo en localStorage guardarlo en la base de datos ,
// si no esta logeado guardar en localStorage
