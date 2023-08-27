import React, { useState } from 'react';
 import './cart.css';
import spicyImage from './images/shreyak-singh-0j4bisyPo3M-unsplash.jpg';

import { FaShoppingCart } from 'react-icons/fa';

function FoodItem({ name, price, addToCart }) {
    return (
       
     <div className="food" >
            <img className="img" src={spicyImage} alt="Spicy Food" />
            <div className="line"></div>
            <p id='rating'>{price}</p>
            <br />
            <h1 id='pricetag'>{name}</h1>
            <button onClick={() => addToCart(name, price)}>Add to Cart</button>
            </div>    
       
    );
}

function Cart({ cartItems }) {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <p key={index}>{item.name} - {item.price}</p>
                ))}
            </ul>
        </div>
    );
}

function Food() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (name, price) => {
        const newItem = { name, price };
        setCartItems([...cartItems, newItem]);
    };

    const foodItems = [
        { name: 'Burger', price: '$5.99' },
        { name: 'Pizza', price: '$8.99' },
        { name: 'Pasta', price: '$7.49' },
        
    ];

    return (
        
            <div className="container">
                <div id="spicy">
                    {foodItems.map((item, index) => (
                       
                        <FoodItem
                            key={index}
                            name={item.name}
                            price={item.price}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
                <Cart cartItems={cartItems} />
            </div>
    );
}

export default Food;
