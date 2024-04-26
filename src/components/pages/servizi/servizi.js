import React, { useState, useEffect } from 'react';
import './servizi.css'; // Importe seu arquivo CSS aqui
import Services from './serviziData';
import icons from './../../icons';

const Servizi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // Estado para controlar a exibição do carrinho
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal
  const [selectedService, setSelectedService] = useState(null); // Estado para armazenar as informações do serviço selecionado
  const [showCheckoutModal, setShowCheckoutModal] = useState(false); // Estado para controlar a exibição do modal de checkout
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '' });

  useEffect(() => {
    const filterServicesByHash = () => {
      const hash = window.location.hash.substr(1);
      setSelectedCategory(hash);
    };

    filterServicesByHash();

    window.addEventListener('hashchange', filterServicesByHash);

    // Carregar o carrinho salvo no localStorage
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    return () => {
      window.removeEventListener('hashchange', filterServicesByHash);
    };
  }, []);

  useEffect(() => {
    // Salvar o carrinho no localStorage sempre que ele for atualizado
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setShowCart(true); // Mostrar o carrinho ao adicionar um item
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
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

  const handleCheckout = () => {
    // Fechar o modal do carrinho
    setShowCart(false);
    // Abrir o modal de checkout
    setShowCheckoutModal(true);
  };

  const closeCheckoutModal = () => {
    setShowCheckoutModal(false);
  };

  const sendWhatsAppMessage = () => {
    // Número de telefone predefinido para enviar a mensagem
    const phoneNumber = '393517733589';
    // Mensagem a ser enviada
    const message = `Resumo do carrinho:\n${cartItems.map(item => `${item.title} - ${item.quantity}x`).join('\n')}\nTotal: €${calculateTotal()}`;
    // URL do WhatsApp com o número de telefone e a mensagem
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Abrir uma nova janela do navegador com o URL do WhatsApp
    window.open(whatsappURL);
  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode usar os dados do cliente, como customerInfo.name e customerInfo.phone, para enviar por email ou outro método de sua escolha.
    // Lembre-se de limpar os dados do cliente após o envio.
    setCustomerInfo({ name: '', phone: '' });
  };

  const continueShopping = () => {
    setShowCheckoutModal(false);
  };

  return (
    <div className='servizi'>
      <section className='title-page-servizi'>
        <div className='container-fluid'>
          <h2>Servizi</h2>
          <p>Esplora il potere della scelta: trova ciò che cerchi con un clic sul nostro sito, dove ogni desiderio diventa realtà!</p>
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
              <button className="btn btn-white" onClick={() => addToCart({...card, id: index})}>Aggiungi al carrello</button>
              <button className="btn btn-white" onClick={() => openModal(card)}>Leggi +</button>
            </div>
          </div>
        ))}
      </section>
      <button className='cart-toggle-btn' onClick={toggleCart}>
        {icons.shoppingCart()}
      </button>
      <div className={`cart ${showCart ? 'open' : ''}`}>
        <button className='close-cart-btn' onClick={toggleCart}>X</button>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title} - €{item.price} - Quantity: {item.quantity}</p>
            <button className='btn-black' onClick={() => decreaseQuantity(index)}>-</button>
            <button className='btn-black' onClick={() => increaseQuantity(index)}>+</button>
            <button className='btn-red' onClick={() => removeFromCart(index)}>x</button>
          </div>
        ))}
        <p>Total: €{calculateTotal()}</p>
        <button className="btn btn-white" onClick={sendWhatsAppMessage}>Checkout</button>
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
                <button className="btn btn-white" onClick={() => {addToCart(selectedService); closeModal(); setShowCart(true)}}>Aggingi al carrelo</button>
              </div>
            )}
          </div>
        </div>
      )}
      {showCheckoutModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeCheckoutModal}>&times;</span>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
              <button className="btn btn-white" onClick={sendWhatsAppMessage}>WhatsApp</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Servizi;
