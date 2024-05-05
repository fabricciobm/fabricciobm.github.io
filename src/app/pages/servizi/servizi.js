import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Services from '../servizi/serviziData';
import useCart from './useCart';
import './../../styles/servizi.css';
import icons from './../../components/icons.js';
import LazyBackgroundImage from './../../assets/background2.webp';

const Servizi = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    applySearchParams();

    const searchParams = new URLSearchParams(location.search);
    const modalTitle = searchParams.get('modal');
    if (modalTitle) {
      const modalService = Services.find(service => service.title === modalTitle);
      if (modalService) {
        setSelectedService(modalService);
        setShowModal(true);
      }
    }
  }, [location]);

  useEffect(() => {
    applySearchParams();
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, [location]);

  const applySearchParams = () => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category') || '';
    const search = searchParams.get('search') || '';
    const modal = searchParams.get('modal') || '';

    setSelectedCategory(category);
    setSearchTerm(search);
    setSelectedService(Services.find(service => service.title === modal));
  };

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    navigate(`/servizi?category=${selectedCategory}&search=${newSearchTerm}&modal=${selectedService ? selectedService.title : ''}`);
  };

  const handleCategorySelect = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    navigate(`/servizi?category=${category}&search=${searchTerm}&modal=${selectedService ? selectedService.title : ''}`);
  };

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
    navigate(`/servizi?category=${selectedCategory}&search=${searchTerm}&modal=${service.title}`);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    navigate(`/servizi?category=${selectedCategory}&search=${searchTerm}`);
  };

  const filterServices = (service) => {
    if (!service) return false;
    const searchFilter = (
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categoryFilter = (
      selectedCategory === '' || (service.tags && service.tags.includes(selectedCategory))
    );

    return searchFilter && categoryFilter;
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const sendWhatsAppMessage = () => {
    const phoneNumber = '393517733589';
    const message = `Ordine:\n${cartItems.map(item => `${item.title} - ${item.quantity}x`).join('\n')}\nTotale: €${calculateTotal()}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const updateCartItems = (updatedCart) => {
    const cleanedCart = updatedCart.map(item => {
      const cleanedItem = { ...item };
      delete cleanedItem.relatedProducts;
      return cleanedItem;
    });
  
    setCartItems(cleanedCart);
    localStorage.setItem('cartItems', JSON.stringify(cleanedCart)); 
  };
  const addToCartWithPlan = (service, plano = null) => {
    let newItem;
  
    if (plano) {
      newItem = {
        ...service,
        title: `${service.title} - ${plano.nome}`,
        price: plano.price,
        quantity: 1
      };
    } else {
      newItem = {
        ...service,
        quantity: 1
      };
    }
  
    if (service.relatedProducts) {
      delete newItem.relatedProducts;
    }
  
    updateCartItems([...cartItems, newItem]);
  };



  const updateCartQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeCartItem(index);
      return;
    }
    const updatedCart = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateCartItems(updatedCart);
  };

  const removeCartItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    updateCartItems(updatedCart);
  };

  return (
    <div className='servizi'>
      <section className='title-page-servizi' style={{backgroundImage: `url(${LazyBackgroundImage})`}}>
        <div className='container-fluid'>
          <h2>Negozio</h2>
          <p>Esplora e trova ciò che cerchi con un clic sul nostro sito, dove ogni desiderio diventa realtà!</p>
          <div className='filter'>
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
        </div>
      </section>
      <section className='archive-card container-fluid'>
        {Services.filter(filterServices).map((card, index) => (
          <div className='card' key={index}>
            <div className='card-content'>
              <div className='card-bg' style={{backgroundImage: `url(${card.image})`}}></div>
              <h3>{card.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: card.description }} />
              {card.planos && (
                <>
                  <button className="btn btn-white" onClick={() => openModal(card)}>{icons.info()} Info</button>
                </>
              )}
              {!card.planos && (
                <>
                  <h3>€{card.price}</h3>
                  <button className="btn btn-white" onClick={() => openModal(card)}>{icons.info()} Info</button>
                  <button className="btn btn-white" onClick={() => { addToCartWithPlan(card); setShowCart(true); }}>{icons.add()} Aggiungi al carrello</button>
                </>
              )}
            </div>
          </div>
        ))}
      </section>
      <button className='cart-toggle-btn' onClick={toggleCart} aria-label='Toggle Cart'>
        {icons.shoppingCart()}
      </button>
      <div className={`cart ${showCart ? 'open' : ''}`}>
        <button className='close-cart-btn' onClick={toggleCart}>X</button>
        <h2>Carrello</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title} - €{item.price} - Quantity: {item.quantity}</p>
            <button className='btn-black' onClick={() => updateCartQuantity(index, item.quantity - 1)}>-</button>
            <button className='btn-black' onClick={() => updateCartQuantity(index, item.quantity + 1)}>+</button>
            <button className='btn-red' onClick={() => removeCartItem(index)}>x</button>
          </div>
        ))}
        <h2>Totale: €{calculateTotal()}</h2>
        <button className="btn btn-trans" onClick={sendWhatsAppMessage}>{icons.whatsapp()} Checkout con WhatsApp </button>
        <button className="btn btn-trans" onClick={toggleCart}>{icons.add()} servizi / prodotti</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className={`modal-content ${selectedService && selectedService.planos ? 'modal-plan' : ''}`}>
            <span className="close" onClick={closeModal}>&times;</span>
            {selectedService && (
              <>
                <div className='modal-card-img'>
                  <img src={selectedService.image} alt={selectedService.title} />
                </div>
                <div className='modal-card-info'>
                  <h2>{selectedService.title}</h2>
                  <h2 className='price'>€{selectedService.price}</h2>
                  <p dangerouslySetInnerHTML={{ __html: selectedService.description }} />
                  <p dangerouslySetInnerHTML={{ __html: selectedService.description_long }} />
                  {selectedService.destaque.map((destaqueItem, index) => (
                    <h2 key={index}>{destaqueItem}</h2>
                  ))}
                  {selectedService.planos && (
                    <div>
                      {Object.keys(selectedService.planos).map((planoKey, i) => (
                        <div className='modal-list-plan' key={i}>
                          <h2>{selectedService.planos[planoKey].nome}</h2>
                          {selectedService.planos[planoKey].destaque.map((destaqueItem, index) => (
                            <p key={index}>{destaqueItem}</p>
                          ))}
                          <h2>€{selectedService.planos[planoKey].price}</h2>
                          <button className="btn btn-trans" onClick={() => { addToCartWithPlan(selectedService, selectedService.planos[planoKey]); setShowCart(true); }}>
                            {icons.add()} Aggiungi al carrello
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <button className="btn btn-trans add-to-cart" onClick={() => { addToCartWithPlan(selectedService); setShowCart(true); }}>
                    {icons.add()} Aggiungi al carrello
                  </button>
                  {selectedService.relatedProducts && (
                    <div className='related-products'>
                      <h2>Prodotti correlati:</h2>
                      {selectedService.relatedProducts.map((relatedProduct, index) => (
                        <div key={index} className="related-product">
                          <img src={relatedProduct.image} alt={relatedProduct.title} />
                          <h3>{relatedProduct.title}</h3>
                          <p dangerouslySetInnerHTML={{ __html: relatedProduct.description }} />
                          <button className="btn btn-trans" onClick={() => openModal(relatedProduct)}>
                            {icons.info()} Info
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Servizi;