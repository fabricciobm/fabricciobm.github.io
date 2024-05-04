// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart }) => {
    return (
        <div className="shopping-cart">
            <h2>Carrinho de Compras</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.title}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingCart;
