import React from 'react';
import './Cart.css';

const Cart = props => {
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: 0</p>

            <div>
                <p>Items: $0</p>
                <p>Shipping and Handling: $0</p>
                <p>Total before tax: $0</p>
                <p>Estimated Tax: $0</p>
                <h4 className="deep-red-text">Order Total: $0</h4>
                <button className="review-button">Review your order</button>
            </div>
        </div>
    );
};

export default Cart;