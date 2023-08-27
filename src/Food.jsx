import React, { useState } from 'react';
import './cart.css';
 import spicyImage from './images/shreyak-singh-0j4bisyPo3M-unsplash.jpg';

function Food(props) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = () => {
        const productName = document.getElementById("rating");
        const productPrice = document.getElementById("pricetag"); 
        const cartItem = `${productName} - ${productPrice}`;

        setCartItems([...cartItems, cartItem]);
    };

    return (
        <button className="add-to-cart"  onClick={addToCart}>   <div className="food-card">
            <div className="food">
                <img className="img" src={props.spicyImage} alt="Spicy Food" />
                <div className="line"></div>
                <p id='rating'>6.5 star</p>
                <br />
                <h1 id='pricetag'>Rs: 199</h1>
            </div>
            
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
        </div></button>
    );
}

export default Food;
