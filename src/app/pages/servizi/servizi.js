import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Services from '../servizi/serviziData';
import './../../styles/servizi.css';
import icons from './../../components/icons.js';
import LazyBackgroundImage from './../../assets/background2.webp';

const Servizi = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedShape, setSelectedShape] = useState('quadrato');
  const [roundedBorders, setRoundedBorders] = useState(false);
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [postalCode, setPostalCode] = useState(localStorage.getItem('postalCode') || '');
  const [province, setProvince] = useState(localStorage.getItem('province') || '');
  const [country, setCountry] = useState(localStorage.getItem('country') || '');
  const [streetNumber, setStreetNumber] = useState(localStorage.getItem('streetNumber') || '');
  const [doorNumber, setDoorNumber] = useState(localStorage.getItem('doorNumber') || '');  
  const [paymentMethod, setPaymentMethod] = useState(localStorage.getItem('paymentMethod') || 'bonifico');
  const [messageContent, setMessageContent] = useState(localStorage.getItem('message') || '');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(null);
  
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

  const handleInputChange = (event, setStateFunction) => {
    const value = event.target.value;
    setStateFunction(value);
    localStorage.setItem(event.target.name, value);
    setErrors({ ...errors, [event.target.name]: '' });
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

  if (service.planos && service.planos.plano1) {
    setSelectedPlan(service.planos.plano1);
  }
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
    const customerName = `${firstName} ${lastName}`;
    const customerEmail = `${email}`;
    const paymentDetails = `Pagamento: ${paymentMethod}`;
    const messageContentFormatted = message !== '' ? `\nMessaggio: ${message}` : '';
    const cartItemsContent = cartItems.map(item => `${item.title} - €${item.price} - Quantità: ${item.quantity}`).join('\n');
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const orderNumber = Math.floor(Math.random() * 999999) + 1; // Número de pedido aleatório entre 1 e 999999
  
    const whatsappMessage = `
    Ordine #${orderNumber} di ${customerName}:
    
    Dettagli dell'ordine:
    ${cartItemsContent}
    Totale: €${totalAmount}
    
    Dettagli del cliente:
    Nome: ${firstName} ${lastName}
    Email: ${email}
    Telefono: ${phone}
    Indirizzo: ${address}
    CAP: ${postalCode}
    Provincia: ${province}
    Paese: ${country}
    Numero Civico: ${streetNumber}
    Numero di Porta: ${doorNumber}
    
    Metodo di pagamento: ${paymentMethod}
    ${messageContentFormatted}
  `;
  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
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

const addToCartWithPlan = (service, plan = null) => {
  let newItem;
  if (plan) {
    // Se um plano for especificado, use os detalhes do plano para o item do carrinho
    newItem = {
      ...service,
      title: `${service.title} - ${plan.nome}`,
      price: plan.price,
      quantity: 1,
      shape: selectedShape,
      roundedBorders: roundedBorders,
    };
  } else {
    // Se nenhum plano for especificado, apenas adicione o serviço ao carrinho
    newItem = {
      ...service,
      quantity: 1,
      shape: selectedShape,
      roundedBorders: roundedBorders,
    };
  }
  if (service.relatedProducts) {
    delete newItem.relatedProducts;
  }
  if (newItem.roundedBorders) {
    newItem.price += 5;
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

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = {};
    if (!firstName.trim()) {
      formErrors.firstName = 'Il campo Nome è obbligatorio';
    }
    if (!lastName.trim()) {
      formErrors.lastName = 'Il campo Cognome è obbligatorio';
    }
    if (!email.trim()) {
      formErrors.email = 'Il campo Email è obbligatorio';
    }
    if (!phone.trim()) {
      formErrors.phone = 'Il campo Telefono è obbligatorio';
    }
    if (!address.trim()) {
      formErrors.address = 'Il campo Indirizzo è obbligatorio';
    }
    if (!postalCode.trim()) {
      formErrors.postalCode = 'Il campo CAP è obbligatorio';
    }
    setErrors(formErrors);
  
    if (Object.keys(formErrors).length === 0) {
      sendWhatsAppMessage();
      clearCart();
    }
  };
  return (
    <div className='servizi'>
      <section className='title-page-servizi' style={{backgroundImage: `url(${LazyBackgroundImage})`}}>
        <div className='container-fluid'>
          <h2>{selectedCategory}</h2>
          <p>Esplora e trova ciò che cerchi con un clic sul nostro sito, dove ogni desiderio diventa realtà!</p>
          <div className='filter'>
          <input
            type='text'
            name='searchTerm'
            placeholder='Cerca...'
            value={searchTerm}
            onChange={(event) => handleInputChange(event, setSearchTerm)} // Modificação aqui
          />
          <select
            name='selectedCategory'
            value={selectedCategory}
            onChange={(event) => handleInputChange(event, setSelectedCategory)} // Modificação aqui
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
              {card.planos ? (
                <>
                  <button className="btn btn-white" onClick={() => openModal(card)}>{icons.info()} Info</button>
                </>
              ) : (
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
        <h1>Carrello</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Il carrello è vuoto</p>
            <span className='space2'></span>
            <button className='btn btn-trans' onClick={toggleCart}>Chiudi Carrello</button>
          </div>
        ) : (
          <>
        <span className='space2'></span>
        {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.title} - €{item.price} - Quantity: {item.quantity}</p>
              <button className='btn-black' onClick={() => updateCartQuantity(index, item.quantity - 1)}>-</button>
              <button className='btn-black' onClick={() => updateCartQuantity(index, item.quantity + 1)}>+</button>
              <button className='btn-red' onClick={() => removeCartItem(index)}>x</button>
            </div>
        ))}
        <h2 className='total-cart'>Totale: €{calculateTotal()}</h2>
        <span className='space'></span>
        <section className='checkout'>
          <h1>Checkout:</h1>
          <form className='checkout' onSubmit={handleSubmit}>
            <span className='checkout-input'>
              <input type="text" name="firstName" placeholder="Nome" value={firstName} onChange={(e) => handleInputChange(e, setFirstName)} required />
              {errors.firstName && <div className="error">{errors.firstName}</div>}
              <input type="text" name="lastName" placeholder="Cognome" value={lastName} onChange={(e) => handleInputChange(e, setLastName)} required />
              {errors.lastName && <div className="error">{errors.lastName}</div>}
            </span>
            <span className='checkout-input'>
              <input type="email" name="email" placeholder="email@email.com" value={email} onChange={(e) => handleInputChange(e, setEmail)} required />
              {errors.email && <div className="error">{errors.email}</div>}
              <input type="tel" name="phone" placeholder="Telefono" value={phone} onChange={(e) => handleInputChange(e, setPhone)} required />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </span>
            <span className='checkout-input'>
              <input type="text" name="address" placeholder="Indirizzo" value={address} onChange={(e) => handleInputChange(e, setAddress)} required />
              {errors.address && <div className="error">{errors.address}</div>}
              <input type="text" name="postalCode" placeholder="CAP" value={postalCode} onChange={(e) => handleInputChange(e, setPostalCode)} required />
              {errors.postalCode && <div className="error">{errors.postalCode}</div>}
              </span>
            <span className='checkout-input'>
              <input type="text" name="province" placeholder="Provincia" value={province} onChange={(e) => handleInputChange(e, setProvince)} />
              {errors.province && <div className="error">{errors.province}</div>}
              <input type="text" name="country" placeholder="Paese" value={country} onChange={(e) => handleInputChange(e, setCountry)} />
              {errors.country && <div className="error">{errors.province}</div>}
              </span>
            <span className='checkout-input'>
              <input type="text" name="streetNumber" placeholder="Numero Civico" value={streetNumber} onChange={(e) => handleInputChange(e, setStreetNumber)} required />
              {errors.streetNumber && <div className="error">{errors.streetNumber}</div>}
              <input type="text" name="doorNumber" placeholder="Numero di Porta" value={doorNumber} onChange={(e) => handleInputChange(e, setDoorNumber)} />
              {errors.doorNumber && <div className="error">{errors.doorNumber}</div>}
            </span>
            <textarea className="textarea-checkout" name="message" placeholder="Messaggio" value={message} onChange={(e) => handleInputChange(e, setMessage)}></textarea>
            <select className="paymentMethod"  name="paymentMethod" value={paymentMethod} onChange={(e) => handleInputChange(e, setPaymentMethod)} required>
              <option value="bonifico">Bonifico Bancario</option>
              <option value="carta">Carta di Credito (Visa/Master/Amex)</option>
              <option value="paypal">PayPal</option>
            </select>
            <span className='space2'></span>
            {cartItems.length > 0 && (
              <button type="submit" className="btn btn-trans">{icons.whatsapp()} Checkout </button>
            )}
          </form>
        </section>
          </>
        )}


      </div>
      <span className='space'></span>
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
{selectedService.planos && Object.keys(selectedService.planos).map((planoKey, i) => (
  <div className='modal-list-plan' key={i}>
    <h2>{selectedService.planos[planoKey].nome}</h2>
    {selectedService.planos[planoKey].destaque && selectedService.planos[planoKey].destaque.map((destaqueItem, index) => (
      <p key={index}>{destaqueItem}</p>
    ))}
    <h2>€{selectedService.planos[planoKey].price}</h2>
    <button className="btn btn-trans" onClick={() => { addToCartWithPlan(selectedService, selectedService.planos[planoKey]); setShowCart(true); }}>
      {icons.add()} Aggiungi al carrello
    </button>
  </div>
))}


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