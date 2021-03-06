import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { GLOBALS } from '../../api/api';
import Item  from "../Item/Item";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, loaded } from "../../services/actions";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
};

const Home = () => {
    const [products, updateProducts] = useState([]);
    const isLoading = useSelector(state=>state.isLoading)
    const dispatch = useDispatch()
    const getProducts = async (limit) => {
        dispatch(showLoading())
        try{
            const {data} = await axios.get(`${GLOBALS.apiUrl}products?limit=${limit}`)
            updateProducts(data);
            dispatch(loaded())
        }catch(err){

        }
    }

    useEffect(() => {
        getProducts(15);
        return () => {}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(isLoading) return (<div className="text-center mt-5">
    <div className="spinner-border text-primary" style={{width:'4rem', height: '4rem'}} role="status"></div></div>)

    return (
        <div className="container mt-4">
            <motion.div variants={container} initial="hidden" animate="visible">
                <div className="row">
                        {products.map((product)=>(
                            <Item {...product} key={product.id}/>
                        ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Home
