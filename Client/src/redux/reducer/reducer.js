import {
    GET_CAMPAIGN,
    FILTER_BY_STATE,
    FILTER_BY_CATEGORY,
    GET_STATES,
    GET_CATEGORY,
    GET_PRODUCT,
    GET_CATEG,
    FILTER_BY_CATEG
  } from "../actions/action";
  import { ADD_TO_CART, GET_DETAIL_CAMPAIGN, GET_STATE } from "../actions/action_type";
  
  const initialState = {
    campaign: [],
    campaignBackup: [],
    campaignFiltered: [],
    detailCampaign: [],
    states: [],
    category: [],
    cartShop:[],
    products: [],
    categ:[],
    productsCopy:[]
}


const reducer = (state = initialState, action)=> {
    console.log(action)
    switch (action.type) {
        case GET_CAMPAIGN:
                return {
                    ...state,
                    campaign: [...action.payload].splice(0, 8),
                    campaignBackUp: action.payload,
                };
        case GET_STATES:
                return {
                    ...state,
                    states: action.payload
                };
        case GET_CATEGORY:
                return {
                    ...state,
                    category: action.payload
                };

        case GET_CATEG:
                return {
                    ...state,
                    categ: action.payload
                };

        case GET_PRODUCT:
                return {
                    ...state,
                    products: action.payload.products, // Accede a products.products para obtener los productos
                    productsCopy: action.payload.products,
                };
        case FILTER_BY_STATE:
            const filteredByState = action.payload === "Todos" ? 
                [...state.campaignBackUp] : 
                [...state.campaignBackUp].filter((campaign) => {
                return campaign.state.includes(action.payload);
                });

            return {
                ...state,
                campaign: filteredByState,
            };
        case FILTER_BY_CATEGORY:
            const filteredByCategory = action.payload === "Todos"
            ? [...state.campaignBackUp] // Si es "Todos", no aplicar filtro
            : [...state.campaignBackUp].filter((campaign) => 
            campaign.category === action.payload);
            return {
                ...state,
                campaign: filteredByCategory,
            };

        case FILTER_BY_CATEG:
            const filteredByCateg = action.payload === "Todos"
            ? [...state.productsCopy] // Restaurar la copia original de productos si se selecciona "Todos"
            : state.productsCopy.filter(producto => producto.category === action.payload);
    
        return {
            ...state,
            products: filteredByCateg
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
        case ADD_TO_CART:
            return{
                ...state,
                cartShop: [...state.cartShop, action.payload] 
            }
                default:
                    return state;
    }
  };
  
  export default reducer;