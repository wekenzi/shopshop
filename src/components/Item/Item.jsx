import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};

const Item = ({category, description, id, image, price, title}) => {
    return (
        <div className="col-md-4">
            <motion.div variants={item}>
                <div className="card m-2" style={{height:'460px'}}>
                    <div 
                    style={{
                        backgroundImage:`url(${image})`, 
                        height:'250px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        margin:'30px'
                    }}>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            <Link to={`/product/${id}`}>{title.substring(0, 20) + '...'}</Link>
                        </h5>
                        <p className="card-text">{description.substring(0, 80) + '...'}</p>
                        <div className="d-flex justify-content-between">
                            <span className="badge badge-primary">${price}</span>
                            <small className="badge badge-second">{category}</small>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Item;
