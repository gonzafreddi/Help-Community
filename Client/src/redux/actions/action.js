import axios from "axios";
import { ADD_TO_CART, GET_DETAIL_CAMPAIGN , GET_STATE} from "./action_type";
export const GET_CAMPAIGN = "GET_CAMPAIGN";
export const FILTER_BY_STATE = "FILTER_BY_STATE";
export const GET_STATES = "GET_STATES";
export const GET_CATEGORY = "GET_CATEGORY";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const GET_PRODUCT = "GET_PRODUCT";

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

export const addToCart=(props)=>{
    return{
        type: ADD_TO_CART,
        payload: props
    }
}

