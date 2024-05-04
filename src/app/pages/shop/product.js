// Product.js
import React from 'react';

const Product = ({ service, addToCart }) => {
    return (
        <div className="product-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => addToCart(service)}>Adicionar ao Carrinho</button>
        </div>
    );
}

export default Product;
