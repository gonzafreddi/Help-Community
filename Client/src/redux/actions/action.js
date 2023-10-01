import axios from "axios";
import { GET_DETAIL_CAMPAIGN , GET_STATE, GET_CATEGORY} from "./action_type";
export const GET_CAMPAIGN = "GET_CAMPAIGN";
export const FILTER_BY_STATE = "FILTER_BY_STATE";


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


export const getDetailCampaign = (name)=>{
console.log(name);
    return async function (dispatch){
        try {
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
        //ruta fictiocia
       try {
        const response = await axios.post('http://localhost:3001/campaign/create', payload);
        return response
       } catch (error) {
        return error.message
       }
    }
}
export function getCategory(){
    return async function(dispatch){
        try { 
            const response = await axios("http://localhost:3001/category")
            dispatch({
                type: GET_CATEGORY,
                payload:response.data
            })
        } catch (error) {
            return console.log(error.message)           
        }
    }
}