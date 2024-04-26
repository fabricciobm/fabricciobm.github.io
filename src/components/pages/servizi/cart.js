import React, { useState, useEffect } from 'react';
import './servizi.css'; // Importe seu arquivo CSS aqui
import Services from './serviziData';
import icons from './../../icons';

const Servizi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // Estado para controlar a exibição do carrinho

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

  return (
    <div className='servizi'>
      <section className='title-page-servizi'>
        <div className='container-fluid'>
          <h2>Servizi</h2>
          <p>Conosci tutti i nostri servizi e scopri come possiamo aiutare...</p>
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
              <button className="btn" onClick={() => addToCart({...card, id: index})}>Aggiungi al carrello</button>
            </div>
          </div>
        ))}
      </section>
      <button className='cart-toggle-btn' onClick={toggleCart}>
        {icons.shoppingCart()}
      </button>
      <div className={`cart ${showCart ? 'open' : ''}`}>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title} - ${item.price} - Quantity: {item.quantity}</p>
            <button className='btn-red' onClick={() => removeFromCart(index)}>x</button>
            <button className='btn'  onClick={() => decreaseQuantity(index)}>-</button>
            <button className='btn'  onClick={() => increaseQuantity(index)}>+</button>
          </div>
        ))}
        <p>Total: ${calculateTotal()}</p>
        <button className='btn'>Checkout</button>
      </div>
    </div>
  );
};

export default Servizi;
