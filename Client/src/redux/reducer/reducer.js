import {
  GET_CAMPAIGN,
  FILTER_BY_STATE,
  FILTER_BY_CATEGORY,
  GET_STATES,
  GET_CATEGORY,
  GET_PRODUCT,
  GET_CATEG,
  FILTER_BY_CATEG,
  ORDEN_PRECIO
} from "../actions/action";
import { GET_DETAIL_CAMPAIGN, GET_STATE } from "../actions/action_type";

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
  productsCopy:[],
  productsFiltered:[],
  filters: false
}


const reducer = (state = initialState, action)=> {
  console.log(state)
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
                  products: action.payload.products,
                  productsCopy: action.payload.products,
                  productsFiltered: action.payload.products, // Agrega esta línea para establecer todos los productos
                  filters: false, // Asegúrate de restablecer el estado de los filtros
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
              ? state.productsCopy // No aplicar ningún filtro, mostrar todos los productos
              : state.productsCopy.filter(producto => producto.category === action.payload);
          
            return {
              ...state,
              filter: action.payload !== "Todos", // Establecer filter en true solo si no es "Todos"
              productsFiltered: filteredByCateg
            };

      case ORDEN_PRECIO:
        const { type } = action.payload;
        const sortedProducts = [...state.productsFiltered];
      
        if (type === "precioMayor") {
          sortedProducts.sort((a, b) => b.price - a.price);
        } else if (type === "precioMenor") {
          sortedProducts.sort((a, b) => a.price - b.price);
        }
      
        return {
          ...state,
          productsFiltered: sortedProducts,
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
      // case ADD_TO_CART:
      //     return{
      //         ...state,
      //         cartShop: [...state.cartShop, action.payload] 
          // }
              default:
                  return state;
  }
};

export default reducer;