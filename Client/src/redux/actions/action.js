import axios from "axios";



export const GET_CAMPAIGN = "GET_CAMPAIGN";



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