import {
    GET_CAMPAIGN,
    FILTER_BY_STATE,
    FILTER_BY_CATEGORY,
    GET_STATES,
    GET_CATEGORY,
    GET_PRODUCT,
  } from "../actions/action";
  import { GET_DETAIL_CAMPAIGN, GET_STATE } from "../actions/action_type";
  
  const initialState = {
    campaign: [],
    campaignBackup: [],
    campaignFiltered: [],
    detailCampaign: [],
    states: [],
    category: [],
    products: [],
    filters: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CAMPAIGN:
        return {
          ...state,
          campaign: [...action.payload].splice(0, 8),
          campaignBackup: action.payload,
        };
      case GET_STATES:
        return {
          ...state,
          states: action.payload,
        };
      case GET_CATEGORY:
        return {
          ...state,
          category: action.payload,
        };
      case GET_PRODUCT:
        return {
          ...state,
          products: action.payload,
        };
      case FILTER_BY_STATE:
        let sta = [];
        if (state.filters) {
          sta = [...state.campaignBackup].filter((campaign) =>
            campaign.StateId === action.payload
          );
        } else {
          sta = [...state.campaign].filter((campaign) =>
            campaign.StateId === action.payload
          );
        }
        return {
          ...state,
          campaign: [...sta].splice(0, 8),
          campaignFiltered: sta,
          currentPage: 0,
          filters: true,
        };
      case FILTER_BY_CATEGORY:
        const filteredByCategory = action.payload === "Todos"
          ? [...state.campaignBackup]
          : [...state.campaignBackup].filter((campañas) =>
              campañas.category === action.payload
            );
        return {
          ...state,
          campaign: filteredByCategory,
        };
      case GET_DETAIL_CAMPAIGN:
        return {
          ...state,
          detailCampaign: action.payload,
        };
      case GET_STATE:
        return {
          ...state,
          states: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;