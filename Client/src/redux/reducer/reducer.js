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
                    campaignBackUp: action.payload,
                };

        case FILTER_BY_STATE:
            const allCampaignCopy = [...state.campaignBackUp];
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

                default:
                    return state;
    }
}

export default reducer;