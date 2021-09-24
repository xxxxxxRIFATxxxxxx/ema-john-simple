import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="ema-john logo" />

            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>

            <div className="search-container">
                <input type="text" placeholder="type here to search" />
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <span>0</span>
            </div>
        </div>
    );
};

export default Header;