import axios from "axios";
import { ADD_ONE_TO_CART, ADD_TO_CART, CLEART_CART, GET_DETAIL_CAMPAIGN , GET_STATE, REMOVE_ONE_TO_CART, REMOVE_TO_CART, GET_PRODUCT_BY_NAME, GET_ALL_BUYS, GET_CART} from "./action_type";
export const GET_CAMPAIGN = "GET_CAMPAIGN";
export const FILTER_BY_STATE = "FILTER_BY_STATE";
export const GET_STATES = "GET_STATES";
export const GET_CATEGORY = "GET_CATEGORY";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";

export const GET_PRODUCT = "GET_PRODUCT";

export const ORDEN_PRECIO = "ORDEN_PRECIO";
export const GET_CATEG = "GET_CATEG";
export const FILTER_BY_CATEG = "FILTER_BY_CATEG";
export const FILTROS_PRECIO = "FILTROS_PRECIO";
export const RESET = "RESET";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const GET_REVIEWS = "GET_REVIEWS";
export const GET_USERS = "GET_USERS";



console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    // En entorno de desarrollo
    axios.defaults.baseURL = "http://localhost:3001";
  } else {
    // En otros entornos (por ejemplo, producción)
    axios.defaults.baseURL  = "https://help-community-production-ad63.up.railway.app";
  }
export const getCampaign = () => {
    return async function (dispatch){
        try{
            const campaignData = await axios('/campaign');
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
            const statesData = await axios("/state");
            const states = statesData.data;
            dispatch({type: GET_STATES, payload: states});
        } catch (error){
            console.log("error en devolver la action", error.message)
        }
    };
};




export const getReviews = () => {
    return async function (dispatch){
        try{
            const reviewsData = await axios("/review");
            const review = reviewsData.data;
            dispatch({type: GET_REVIEWS, payload: review});
        } catch (error){
            console.log("error en devolver la action", error.message)
        }
    };
};



export const getCategory = () => {
    return async function (dispatch){
        try{
            const categoryData = await axios("/category");
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
            const categData = await axios("/categoryProduct");
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
            const dataDetail = await axios(`/campaign?name=${name}`)
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

export const productOrdenPrecio = (order) => {
    return async function (dispatch) {
      try {
        dispatch({ type: ORDEN_PRECIO, payload: order });
      } catch (error) {
        console.log(error.message);
      }
    };
  };


  export const productsFiltrosPrecio = (order) => {
    return async function (dispatch){
        try{
            dispatch({type: FILTROS_PRECIO, payload: order});
        } catch (error){
            console.log(error.message)
        }
    };
};

export const resetProducts = () => {
    return async function (dispatch){
        try {
            dispatch({ type: RESET });
        } catch (error) {
            console.log(error.message);
        }
    };
};



export const getProduct = () => {
    return async function (dispatch){
        try{
            const productData = await axios("/product");
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
            const {data} = await axios("/state")
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
        const response = await axios.post('/campaign/create', payload);
        return response
       } catch (error) {
        return error.message
       }
    }
}

export function postProduct(payload) {
    return async function () {
      
        try {
            const response = await axios.post('/product', payload);
            return response
        } catch (error) {
            return error.message
        }
    }
}
export function postUser(payload) {
    return async function (dispatch) {
      
        try {
            const {data} = await axios.post('/user/create', payload);
            
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

export const getCar = (email) => {
    console.log("Entro", email);
    return async function (dispatch) {
        try {
            const { data } = await axios(`/shoppingCar/${email}`);
            console.log(data);

            // Si data es un arreglo, puedes recorrerlo directamente para realizar el parseo
            const parsed = data.map((e) => {
                return {
                    id: e.id,
                    products: JSON.parse(e.products),
                };
            });

            console.log(parsed, "parseado");

            return dispatch({
                type: GET_CART,
                payload: parsed,
            });
        } catch (error) {
            console.error("Error al obtener el carrito:", error);
            // Puedes manejar el error adecuadamente aquí, por ejemplo, enviando un mensaje de error al estado.
        }
    };
};


export const getProductByName=(name)=>{
    console.log(name)
    return async (dispatch)=>{
        try {
            const response = await axios(`/product?name=${name}`)
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

export const createOrder = (payload)=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.post("/payment/create_order", payload)
            console.log(data)
            window.location.href = data.init_point
            return order
        } catch (error) {
            console.log(error)
        }
    }
}



export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/user");
      const data = response.data;
    //   console.log("Response user", response.data);
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};


export const getAllBuys =async()=>{
    try {
        const response = await axios("/buys")
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getAllBuysForUser =async(email)=>{
    try {
        const response = await axios(`/buys/user/${email}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const createReview = (review) => {
    return { type: CREATE_REVIEW, payload: review };
};

export const clearCart = ()=>{
    return {
        type: CLEART_CART
    }
}

