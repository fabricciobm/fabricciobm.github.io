// servizi.js

import React, { useState, useEffect } from 'react';
import Services from '../servizi/serviziData';
import useCart from './useCart';
import './../../styles/servizi.css';
import icons from './../../components/icons.js';

const Servizi = () => {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '' });

  useEffect(() => {
    const filterServicesByHash = () => {
      const hash = window.location.hash.substr(1);
      setSelectedCategory(hash);
    };

    filterServicesByHash();

    window.addEventListener('hashchange', filterServicesByHash);

    return () => {
      window.removeEventListener('hashchange', filterServicesByHash);
    };
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = (event) => {
    setSelectedCategory(event.target.value);
    window.location.hash = event.target.value;
  };

  const filterServices = (service) => {
    const searchFilter = (
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categoryFilter = (
      selectedCategory === '' || service.tags.includes(selectedCategory)
    );

    return searchFilter && categoryFilter;
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCustomerInfo({ name: '', phone: '' });
  };

  const continueShopping = () => {
    setShowCheckoutModal(false);
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = '393517733589';
    const message = `Resumo do carrinho:\n${cartItems.map(item => `${item.title} - ${item.quantity}x`).join('\n')}\nTotale: €${calculateTotal()}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className='servizi'>
      <section className='title-page-servizi'>
        <div className='container-fluid'>
          <h2>Servizi</h2>
          <p>Esplora e trova ciò che cerchi con un clic sul nostro sito, dove ogni desiderio diventa realtà!</p>
          <input
            type='text'
            placeholder='Cerca...'
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            value={selectedCategory}
            onChange={handleCategorySelect}
          >
            <option value=''>Tutti</option>
            <option value='design'>Design</option>
            <option value='sviluppo'>Sviluppo</option>
            <option value='marketing'>Marketing</option>
            <option value='custom'>Custom</option>
          </select>
        </div>
      </section>
      <section className='archive-card container-fluid'>
        {Services.filter(filterServices).map((card, index) => (
          <div className='card' key={index}>
            <div className='card-content'>
              <div className='card-bg' style={{backgroundImage: `url(${card.image})`}}></div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <h3>€{card.price}</h3>
              <button className="btn btn-white" onClick={() => addToCart({...card, id: index})}>{icons.add()} Aggiungi al carrello</button>
              <button className="btn btn-white" onClick={() => openModal(card)}>{icons.info()} Info</button>
            </div>
          </div>
        ))}
      </section>
      <button className='cart-toggle-btn' onClick={toggleCart}>
        {icons.shoppingCart()}
      </button>
      <div className={`cart ${showCart ? 'open' : ''}`}>
        <button className='close-cart-btn' onClick={toggleCart}>X</button>
        <h2>Carrello</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title} - €{item.price} - Quantity: {item.quantity}</p>
            <button className='btn-black' onClick={() => decreaseQuantity(index)}>-</button>
            <button className='btn-black' onClick={() => increaseQuantity(index)}>+</button>
            <button className='btn-red' onClick={() => removeFromCart(index)}>x</button>
          </div>
        ))}
        <h2>Totale: €{calculateTotal()}</h2>
        <button className="btn btn-trans" onClick={sendWhatsAppMessage}>{icons.whatsapp()} Invia </button>
        <button className="btn btn-trans" onClick={toggleCart}>{icons.add()} servizi e prodotti</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {selectedService && (
              <div>
                <img src={selectedService.image} alt={selectedService.title} />
                <h2>{selectedService.title}</h2>
                <p>€{selectedService.price}</p>
                <p>{selectedService.description}</p>
                <button className="btn btn-trans" onClick={() => {addToCart(selectedService); closeModal(); setShowCart(true)}}> {icons.add()}  Aggingi al carrelo</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Servizi;
