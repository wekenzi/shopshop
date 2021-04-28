import React from 'react';
import icon from "../../assets/searchIcon.svg";
import { Link, Route } from "react-router-dom";
import Icofont from 'react-icofont';
import { useSelector } from "react-redux";

const Header = ({changeLang, lang}) => {
    const cart = useSelector(state=>state.cart)

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="d-flex">
                <span className="navbar-brand">ShopShop</span>
                <ul className="navbar-nav flex-row">
                    <Route exact path="/" children={({ match }) => <li className={match ? 'nav-item mx-2 active' : 'nav-item mx-2'}>
                        <Link to="/" className="nav-link" style={{
                            fontSize: '1.5rem',
                            padding: '0'}}>
                            <Icofont icon="home" size="1"/>
                        </Link></li>}>
                    </Route>
                    <Route exact path="/cart" children={({ match }) => <li className={match ? 'nav-item mx-2 active' : 'nav-item mx-2'}>
                        <Link to="/cart" className="nav-link" style={{
                            fontSize: '1.5rem',
                            padding: '0',
                            position:'relative'}}>
                            <Icofont icon="cart" size="1"/>
                            {cart.length > 0 && <span className="badge badge-primary" style={{position:'absolute',fontSize:'40%'}}>{cart.length}</span>}
                        </Link></li>}>
                    </Route>
                </ul>
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-info my-2 my-sm-0" type="submit">
                    <img src={icon} alt="img"/>
                </button>
            </form>
            <button className="btn btn-outline-light my-2 my-sm-0" onClick={()=>changeLang()}>{lang}</button>
        </nav>
    )
}

export default Header;
