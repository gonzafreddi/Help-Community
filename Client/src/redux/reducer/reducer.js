import { GET_CAMPAIGN } from "../actions/action"

const initialState = {
    campaign: [],
    campaignBackup: [],
}

const  reducer = (state = initialState, action)=> {
    switch (action.type) {
        case GET_CAMPAIGN:
                return {
                    ...state,
                    campaign: [...action.payload].splice(0, 8),
                    campaignBackUp: action.payload,
                };
                default:
                    return state;
    }
}

export default reducer;