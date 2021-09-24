import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Product = props => {
    const { name, seller, star, img, price, stock } = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt={name} />
            </div>
            <div>
                <h3 className="blue-text">{name}</h3>
                <small>by {seller}</small>
                <h2>${price}</h2>
                <p>
                    <Rating
                        initialRating={star}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                        className="star-icon"
                    />
                </p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;