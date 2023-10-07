import axios from "axios";
import { ADD_ONE_TO_CART, ADD_TO_CART, CLEART_CART, GET_DETAIL_CAMPAIGN , GET_STATE, REMOVE_ONE_TO_CART, REMOVE_TO_CART, GET_PRODUCT_BY_NAME} from "./action_type";
export const GET_CAMPAIGN = "GET_CAMPAIGN";
export const FILTER_BY_STATE = "FILTER_BY_STATE";
export const GET_STATES = "GET_STATES";
export const GET_CATEGORY = "GET_CATEGORY";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const GET_PRODUCT = "GET_PRODUCT";

export const ORDEN_PRECIO = "ORDEN_PRECIO";
export const GET_CATEG = "GET_CATEG";
export const FILTER_BY_CATEG = "FILTER_BY_CATEG";



export const getCampaign = () => {
    return async function (dispatch){
        try{
            const campaignData = await axios('http://localhost:3001/campaign');
            const campaign = campaignData.data;
            dispatch({type: GET_CAMPAIGN, payload: campaign});
        } catch (error){
            console.log("error en devolver la action", error.message)
        }
    };
};

export const getStates = () => {
    return async function (dispatch){
        try{
            const statesData = await axios("http://localhost:3001/state");
            const states = statesData.data;
            dispatch({type: GET_STATES, payload: states});
        } catch (error){
            console.log("error en devolver la action", error.message)
        }
    };
};



export const getCategory = () => {
    return async function (dispatch){
        try{
            const categoryData = await axios("http://localhost:3001/category");
            const category = categoryData.data;
            dispatch({type: GET_CATEGORY, payload: category});
        } catch (error){
            console.log("error en devolver la action", error.message)
        }
    };
};



export const getCateg = () => {
    return async function (dispatch){
        try{
            const categData = await axios("https://dummyjson.com/products/categories");
            const categ = categData.data;
            dispatch({type: GET_CATEG, payload: categ});
        } catch (error){
            console.log("error en devolver la action", error.message)
        }
    };
};


export const getDetailCampaign = (name)=>{
console.log(name);
    return async function (dispatch){
        try {
            console.log("entre a la funcion")
            const dataDetail = await axios(`http://localhost:3001/campaign?name=${name}`)
            const dataCampaign = dataDetail.data
            dispatch({
                type: GET_DETAIL_CAMPAIGN,
                payload: dataCampaign
            })
        } catch (error) {
            console.log("error en la action de detail")
        }
    }
}

export function filterByState(payload){
    return{
        type: "FILTER_BY_STATE",
        payload
    }
}



export function filterByCategory(payload){
    return{
        type: "FILTER_BY_CATEGORY",
        payload
    }
}

export function filterByCateg(payload){
    return{
        type: FILTER_BY_CATEG,
        payload
    }
}

export const productOrdenPrecio = (orderType) => {
    return async function (dispatch) {
      try {
        dispatch({ type: ORDEN_PRECIO, payload: { type: orderType } });
      } catch (error) {
        console.log(error.message);
      }
    };
  };

export const getProduct = () => {
    return async function (dispatch){
        try{
            const productData = await axios("https://dummyjson.com/products");
            const products = productData.data;
            dispatch({type: GET_PRODUCT, payload: products});
        } catch (error){
            console.log("error en devolver los productos", error.message)
        }
    };
};

export const getState = ()=>{
    return async function(dispatch){
        try {
            const {data} = await axios("http://localhost:3001/state")
            dispatch({
                type: GET_STATE,
                payload: data
            })
        } catch (error) {
            console.log(error.mesage)
        }
    }
}

export function postCampaign(payload) {
    return async function (dispatch) {
      
       try {
        const response = await axios.post('http://localhost:3001/campaign/create', payload);
        return response
       } catch (error) {
        return error.message
       }
    }
}
export function postUser(payload) {
    return async function (dispatch) {
      
        try {
            const {data} = await axios.post('http://localhost:3001/user/create', payload);
            
            if (!data.length) throw Error('No se ha podido crear el usuario')
            if (data.length) console.log('Usuario creado correctamente')
            
        } catch (error) {
            return error.message
        }
    }
}

export const addToCart=(product, quantity)=>{
    return{
        type: ADD_TO_CART,
        payload: {
            product,
            quantity
        }
    }
}

export const removeTocart=(id)=>{
    return{
        type: REMOVE_TO_CART,
        payload: id
    }
}
export const addOneToCart=(id)=>{
return{
    type:ADD_ONE_TO_CART,
    payload: id
}
}

export const removeOneToCart=(id)=>{
    return{
        type:REMOVE_ONE_TO_CART,
        payload:id
    }
}

export const getProductByName=(name)=>{
    return async (dispatch)=>{
        try {
            const response = await axios(`http://localhost:3001/product?name=${name}`)
            console.log(response.data)
            dispatch({
                type: GET_PRODUCT_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}