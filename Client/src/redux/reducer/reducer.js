import { getItem } from "../../utils/localStorage";
import {
    GET_CAMPAIGN,
    FILTER_BY_STATE,
    FILTER_BY_CATEGORY,
    GET_STATES,
    GET_CATEGORY,
    GET_PRODUCT,
    GET_CATEG,
    FILTER_BY_CATEG,
    ORDEN_PRECIO,
    FILTROS_PRECIO,
    RESET,
    GET_USERS,
    CREATE_REVIEW,
    GET_REVIEWS
  } from "../actions/action";
  import { ADD_ONE_TO_CART, ADD_TO_CART, GET_DETAIL_CAMPAIGN, GET_PRODUCT_BY_NAME, GET_STATE, REMOVE_ONE_TO_CART, REMOVE_TO_CART } from "../actions/action_type";
  
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
    productsCopy:[],
    detailProduct:[],
    productsFiltered:[],
    filters: false,
    users:[],
    review: []
}


const reducer = (state = initialState, action)=> {
    console.log("state: ", state)
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
        case GET_REVIEWS:
                return {
                    ...state,
                    review: action.payload
                    };
        case GET_CATEG:
                return {
                    ...state,
                    categ: action.payload
                };

        case GET_PRODUCT:
                return {
                    ...state,
                    products: action.payload, // Accede a products.products para obtener los productos
                    productsCopy: action.payload,
                    // products: action.payload.products, // Accede a products.products para obtener los productos
                    // productsCopy: action.payload.products,
                    // // productsFiltered: action.payload.products,
                    filters: false, // Asegúrate de restablecer el estado de los filtros

                };
        case CREATE_REVIEW:
                return { 
                ...state, 
                review: action.payload 
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
            ? state.productsCopy // Restaurar la copia original de productos si se selecciona "Todos"
            : state.productsCopy.filter(producto => producto.category === action.payload);
            
    
        return {
            ...state,
            products: filteredByCateg,
            productsFiltered: filteredByCateg,
            filters: action.payload !== "Todos", // Establecer filter en true solo si no es ""
        };

        case ORDEN_PRECIO:
            switch (action.payload) {
                case "precioMayor":
                    let may = [];
                    if (state.filters) {
                        may = [...state.productsFiltered].sort((prev, next) => {
                            if ((prev.price) > (next.price)) return -1;
                            if ((prev.price) < (next.price)) return 1;
                            return 0;
                        });
                        return {
                            ...state,
                            products: [...may],
                            productsFiltered: may,
                            filters: true
                        };
                    } else {
                        may = [...state.productsCopy].sort((prev, next) => {
                            if ((prev.price) > (next.price)) return -1;
                            if ((prev.price) < (next.price)) return 1;
                            return 0;
                        });
                        return {
                            ...state,
                            products: [...may],
                            productsFiltered: may,
                            filters: true
                        };
                    }
                case "precioMenor":
                    let men = [];
                    if (state.filters) {
                        men = [...state.productsFiltered].sort((prev, next) => {
                            if ((prev.price) > (next.price)) return 1;
                            if ((prev.price) < (next.price)) return -1;
                            return 0;
                        });
                        return {
                            ...state,
                            products: [...men],
                            productsFiltered: men,
                            filters: true
                        };
                    } else {
                        men = [...state.productsCopy].sort((prev, next) => {
                            if ((prev.price) > (next.price)) return 1;
                            if ((prev.price) < (next.price)) return -1;
                            return 0;
                        });
                        return {
                            ...state,
                            products: [...men],
                            productsFiltered: men,
                            filters: true
                        };
                    }
                default:
                    return state;
            }
        
            case FILTROS_PRECIO:
            switch (action.payload) {
                case "menor100":
                    let menorCien = []
                    if(state.filters){
                        menorCien = [...state.productsFiltered].filter((prod) => (prod.price) < 100);
                        return {
                        ...state,
                        products: [...menorCien],
                        productsFiltered: menorCien,
                        filters: true

                        }} else{
                            
                        menorCien = [...state.productsCopy].filter((prod) => (prod.price) < 100);
                        return {
                        ...state,
                        products: [...menorCien],
                        productsFiltered: menorCien,
                        filters: true
                        }
                        };
                case "menor500":
                    let menorQuini = []
                    if(state.filters){
                        menorQuini = [...state.productsFiltered].filter((prod) => (prod.price) < 500);
                        return {
                        ...state,
                        products: [...menorQuini],
                        productsFiltered: menorQuini,
                        filters: true

                        }} else{
                            
                        menorQuini = [...state.productsCopy].filter((prod) => (prod.price) < 500);
                        return {
                        ...state,
                        products: [...menorQuini],
                        productsFiltered: menorQuini,
                        filters: true
                        }
                        };
                case "menor1000":
                    let menorMil = []
                    if(state.filters){
                        menorMil = [...state.productsFiltered].filter((prod) => (prod.price) < 1000);
                        return {
                        ...state,
                        products: [...menorMil],
                        productsFiltered: menorMil,
                        filters: true

                        }} else{
                            
                        menorMil = [...state.productsCopy].filter((prod) => (prod.price) < 1000);
                        return {
                        ...state,
                        products: [...menorMil],
                        productsFiltered: menorMil,
                        filters: true
                        }
                        };
                case "mayor1000":
                    let mayorMil = []
                    if(state.filters){
                        mayorMil = [...state.productsFiltered].filter((prod) => (prod.price) > 1000);
                        return {
                        ...state,
                        products: [...mayorMil],
                        productsFiltered: mayorMil,
                        filters: true

                        }} else{
                            
                        mayorMil = [...state.productsCopy].filter((prod) => (prod.price) > 1000);
                        return {
                        ...state,
                        products: [...mayorMil],
                        productsFiltered: mayorMil,
                        filters: true
                        }
                        };
                default:
                    return state;
            }
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
                case GET_PRODUCT_BY_NAME:
                    return{
                        ...state, 
                        detailProduct: action.payload

                    }
                case RESET:
                        return {
                            ...state,
                            products: [...state.productsCopy],
                            productsFiltered: [],
                            filters: false
                        };  
                case GET_USERS:
                        return {
                          ...state,
                          users: action.payload,   
                        };

                default:
                    return state;
    }
  };
  
  export default reducer;