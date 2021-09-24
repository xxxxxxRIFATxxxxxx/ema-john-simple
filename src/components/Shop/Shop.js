import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.JSON")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="shop">
            <div className="products">
                {
                    products.map(product => <Product key={product.key} product={product}></Product>)
                }
            </div>

            <div className="cart">Cart</div>
        </div>
    );
};

export default Shop;