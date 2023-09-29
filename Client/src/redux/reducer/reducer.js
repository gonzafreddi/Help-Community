import { GET_CAMPAIGN, FILTER_BY_STATE } from "../actions/action"
import { GET_DETAIL_CAMPAIGN } from "../actions/action_type";
const initialState = {
    campaign: [],
    campaignBackup: [],
    detailCampaign: [],
    states: []
}

const  reducer = (state = initialState, action)=> {
    
    switch (action.type) {
        case GET_CAMPAIGN:
                return {
                    ...state,
                    campaign: [...action.payload].splice(0, 8),
                    campaignBackUp: action.payload,
                };
        case GET_DETAIL_CAMPAIGN:
            return{
                ...state,
                detailCampaign: action.payload
            }
                default:
                    return state;
    }
}

export default reducer;