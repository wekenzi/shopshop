const SHOWLOADING = 'SHOWLOADING';
const LOADED = 'LOADED';
const ADDTOCART = 'ADDTOCART';
const REMOVEFROMCART = 'REMOVEFROMCART';

const showLoading = () => {
    return {type:SHOWLOADING}
}

const loaded = () => {
    return {type:LOADED}
}

const addToCart = (payload) => {
    return {type:ADDTOCART, payload}
}

const removeFromCart = (payload) => {
    return {type:REMOVEFROMCART, payload}
}

export { SHOWLOADING, LOADED, ADDTOCART, REMOVEFROMCART, showLoading, loaded, addToCart, removeFromCart };