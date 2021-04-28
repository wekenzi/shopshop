import { LOADED, ADDTOCART, SHOWLOADING, REMOVEFROMCART } from "./actions";

const initialState = {
    isLoading:false,
    cart: []
  };
  
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOADED:
            return {...state, isLoading:false}
        case SHOWLOADING:
            return {...state, isLoading:true}
        case ADDTOCART:
            state.cart = [...state.cart, action.payload]
            return state;
        case REMOVEFROMCART:
            state.cart = state.cart.filter(x=>x.id !== action.payload.id)
            return state;         
        default:
            return state;
    }
};

export default rootReducer;