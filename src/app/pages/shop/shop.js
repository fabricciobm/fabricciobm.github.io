// Shop.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './ShoppingCart'; // Importa o contexto do carrinho
import Services from './../../pages/servizi/servizi';

const Shop = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
      alert('Product added to cart!');
    }
  };

  return (
    <div className="shop">
      <h2>Our Services</h2>
      <div className="services">
        {Services.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => setSelectedProduct(service)}>Info</button>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedProduct(null)}>&times;</span>
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
