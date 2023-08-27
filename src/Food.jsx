import React, { useState } from 'react';
import './cart.css';
import spicyImage from './images/shreyak-singh-0j4bisyPo3M-unsplash.jpg';

function Food(props) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = () => {
        const productName = document.getElementById("rating").textContent;
        const productPrice = document.getElementById("pricetag").textContent;
        const cartItem = `${productName} - ${productPrice}`;

        setCartItems([...cartItems, cartItem]);
    };

    return (
        <div className="food-card">
            <div className="food">
                <img className="img" src={spicyImage} alt="Spicy Food" />
                <div className="line"></div>
                <p id='rating'>6.5 star</p>
                <br />
                <h1 id='pricetag'>Rs: 199</h1>
                <button className="add-to-cart" onClick={addToCart}>
                    Add to Cart
                </button>
            </div>

            <div className="cart-items">
                <h2>Your Cart</h2>
                <div>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Food;
