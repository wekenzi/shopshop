import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { GLOBALS } from '../../api/api';
import { useSelector, useDispatch } from "react-redux";
import { showLoading, loaded, addToCart } from "../../services/actions";

const ProductPage = () => {
    const { id } = useParams()
    const [product, updateProduct] = useState();
    const isLoading = useSelector(state=>state.isLoading)
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    
    const getProductData = async () => {
        dispatch(showLoading())
        try{
            const {data} = await axios.get(`${GLOBALS.apiUrl}products/${id}`)
            updateProduct(data);
            dispatch(loaded())
        }catch(err){

        }
    }

    const getItemFromStore = (id) =>{
        let item = cart.find(x=>x.id === id);
        return item ? true : false;
    }

    useEffect(() => {
        getProductData();
        return () => {}
    }, [])

    if(!product || isLoading) return (<div className="text-center mt-5">
    <div className="spinner-border text-primary" style={{width:'4rem', height: '4rem'}} role="status"></div></div>)

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3">
                    <img src={product.image} className="img-fluid" alt="img"/>
                    <h3 className="mt-3 text-center text-success">${product.price}</h3>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-8">
                    <h1 className="mb-4">{product.title}</h1>
                    <p>{product.description}</p>
                    <button type="button" className="btn btn-primary" onClick={()=>dispatch(addToCart(product))} disabled={getItemFromStore(product.id)}>
                        {getItemFromStore(product.id) ? 'In Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;
