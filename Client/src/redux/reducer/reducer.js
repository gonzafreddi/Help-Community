import { getItem } from "../../utils/localStorage";
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
  import { ADD_ONE_TO_CART, ADD_TO_CART, GET_DETAIL_CAMPAIGN, GET_STATE, REMOVE_ONE_TO_CART, REMOVE_TO_CART } from "../actions/action_type";
  
  const initialState = {
    campaign: [],
    campaignBackup: [],
    campaignFiltered: [],
    detailCampaign: [],
    states: [],
    category: [],
    cartShop: getItem("cartShop")||[],
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
            const {product, quantity} = action.payload;
            const exisingItem = state.cartShop.find(item=> item.product.id === product.id)
            
            if(exisingItem){
                //si esta actualizo la cantidad 
                
                const updtedCartItems = state.cartShop.map(item =>{
                    if(item.product.nombre === product.nombre){
                        return{
                            ...item,
                            quantity: item.quantity +1
                        }
                    }
                    return item
                })
                return {
                    ...state, 
                    cartShop: updtedCartItems
                }
            }else {
                return{
                    ...state, 
                    cartShop: [...state.cartShop, 
                    {
                        product,
                        quantity
                    }
                    ]
                }
            }case REMOVE_TO_CART:
            const idToRemove = action.payload;
            const filteredCart = state.cartShop.filter(item => item.product.id !== idToRemove);
            return {
              ...state,
              cartShop:filteredCart
            };
            case ADD_ONE_TO_CART:
            const productIdToAdd = action.payload
            const updtedCart = state.cartShop.map(item =>{
                if(item.product.id === productIdToAdd){
                    return{
                        ...item,
                        quantity: item.quantity + 1

                    }
                }

                return item
                })
              const calculateTotalPrice = updtedCart.map(e=>({
                   ...e,
                  precio: e.product.precio * e.quantity
               }))
                 return{
                     ...state,
                        cartShop: calculateTotalPrice
                    }


                case REMOVE_ONE_TO_CART:
                    const productIdToRemov = action.payload
                    const updtedRemoveCart = state.cartShop.map(item =>{
                        if(item.product.id === productIdToRemov && item.quantity > 1){
                            return{
                                ...item,
                                quantity: item.quantity - 1
                            }
                        }
                        return item
                    })
              
                        return{
                            ...state,
                            cartShop: updtedRemoveCart
                        }
                default:
                    return state;
    }
  };
  
  export default reducer;