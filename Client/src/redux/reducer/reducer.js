import { GET_CAMPAIGN, FILTER_BY_STATE } from "../actions/action"

const initialState = {
    campaign: [],
    campaignBackup: [],
    states: [],
}

const  reducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_CAMPAIGN:
                return {
                    ...state,
                    campaign: [...action.payload].splice(0, 8),
                    campaignBackup: action.payload,
                };
                default:
                    return state;
    }
}

export default reducer;