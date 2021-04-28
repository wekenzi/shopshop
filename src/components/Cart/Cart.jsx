import React, { useCallback } from 'react'
import Icofont from 'react-icofont';
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import { removeFromCart } from "../../services/actions";

const Cart = () => {
    const history = useHistory();
    const goToProducts = useCallback(() => history.push('/'), [history]);
    const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const countTotal = (arr) => arr.map( el => el.price ).reduce(( max, cur )=>max+cur);

    return (
        <div className="container mt-4">
            <h1 className="text-dark">Items In Cart <span className="text-info text-monospace"> ({cart.length}) </span></h1>
            { cart.length === 0 && 
                <div className="alert alert-secondary text-center" role="alert">
                    <h1 className="alert-heading">Oops!</h1>
                    <h4>The Cart is empty</h4>
                    <button className="btn btn-primary" onClick={()=>goToProducts()}>Add Items</button>
                </div>
            }
            { cart.length > 0 && <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            cart.map((item)=>(
                                <tr key={item.id}>
                                    <td><img src={item.image} alt="img" style={{width:'20px'}}/></td>
                                    <td>{item.title.substring(0, 60) + '...'}</td>
                                    <td><span className="badge badge-secondary">{item.category}</span></td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={()=>dispatch(removeFromCart(item.id))}>
                                            <Icofont icon="trash" size="1"/>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="card">
                    <h2 className="my-1 text-center text-dark text-monospace">Total Cost: ${countTotal(cart)}</h2>
                </div>
                </>
            }
        </div>
    )
}

export default Cart
