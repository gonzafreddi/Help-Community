import { GET_CAMPAIGN, FILTER_BY_STATE } from "../actions/action"
import { GET_CATEGORY, GET_DETAIL_CAMPAIGN, GET_STATE } from "../actions/action_type";
const initialState = {
    campaign: [],
    campaignBackup: [],
    detailCampaign: [],
    states: [],
    category: []
}


const  reducer = (state = initialState, action)=> {
    console.log(action.payload)
    switch (action.type) {
        case GET_CAMPAIGN:
                return {
                    ...state,
                    campaign: [...action.payload].splice(0, 8),
                    campaignBackup: action.payload,
                };


        case FILTER_BY_STATE:
            const allCampaignCopy = [...state.campaignBackup];
            const filteredByState = 
            action.payload === "Todos"
            ? allCampaignCopy
            : allCampaignCopy.filter((campañas) => {
                const campaignState = campañas.state;
                console.log(driverTeams)
                return campaignState.includes(action.payload);
                });

            return {
                ...state,
                campaign: filteredByState,
            };

         case GET_DETAIL_CAMPAIGN:
            return{
                ...state,
                detailCampaign: action.payload
            }
        case GET_STATE:
            return{
                ...state,
                states: action.payload
                
            }
        case GET_CATEGORY:{
            return{
                ...state,
                category: action.payload
            }
        }
                default:
                    return state;
    }
}

export default reducer;