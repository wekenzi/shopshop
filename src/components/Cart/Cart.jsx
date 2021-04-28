import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector(state=>state.cart)
    return (
        <div>
            {cart.length}
        </div>
    )
}

export default Cart
