import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);

    const handleSearch = event => {
        const searchProducts = products.filter(product => product.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setSearchProducts(searchProducts);
    };


    useEffect(() => {
        fetch("./products.JSON")
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setSearchProducts(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder="type here to search" />
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <span>0</span>
            </div>
            <div className="shop">
                <div className="products">
                    {
                        searchProducts.map(product => <Product key={product.key} product={product}></Product>)
                    }
                </div>

                <div className="cart">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;