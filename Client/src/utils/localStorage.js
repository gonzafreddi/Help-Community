
import { ca } from "date-fns/locale"
import { verifyLog } from "./verifyLog"
import axios from "axios"
import { addOneToCart } from "../redux/actions/action"
import { async } from "@firebase/util"


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
      return 
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
export const addOneToCartDb = async(product) => {
   try {
       // Crea un nuevo objeto con la cantidad incrementada en 1, sin la propiedad 'idCar'
       const { idCar, ...updatedProduct } = product;
       updatedProduct.quantity = product.quantity + 1;
       console.log(updatedProduct)
       // Enviar la información en el cuerpo de la solicitud mediante Axios
       const req = await axios.put(`http://localhost:3001/shoppingCar/${product.idCar}`, updatedProduct);

       
   } catch (error) {
       console.error(error, "fallo");
       // Maneja el error de acuerdo a tus necesidades.
   }
};
export const removeOneFromCartDb = async (product) => {
   try {
       // Crea un nuevo objeto con la cantidad decrementada en 1, sin la propiedad 'idCar'
       const { idCar, ...updatedProduct } = product;
       updatedProduct.quantity = product.quantity - 1;
       console.log(updatedProduct);
       
       // Enviar la información en el cuerpo de la solicitud mediante Axios
       const req = await axios.put(`http://localhost:3001/shoppingCar/${product.idCar}`, updatedProduct);
   } catch (error) {
       console.error(error, "fallo");
       // Maneja el error de acuerdo a tus necesidades.
   }
};

export const removeTheCartDb = async(id)=>{
   try {
      console.log(id)
      await axios.delete(`http://localhost:3001/shoppingCar/${id}`)
   } catch (error) {
      console.log(error.message)
   }
}

//funcion verifique si el usuario esta logeado
//si esta logeada y hay algo en localStorage guardarlo en la base de datos ,
// si no esta logeado guardar en localStorage
