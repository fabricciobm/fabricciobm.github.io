import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faAddressBook, 
  faShoppingCart, 
  faBars, 
  faTimes,
  faArrowAltCircleUp,
  faPhone,
  faShop,
  faInfo,
  faAdd,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
  faFacebookMessenger,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// Objeto que mapeia os nomes dos ícones aos seus respectivos componentes
const iconComponents = {
  home: () => <FontAwesomeIcon icon={faHome} />,
  addressBook: () => <FontAwesomeIcon icon={faAddressBook} />,
  shoppingCart: () => <FontAwesomeIcon icon={faShoppingCart} />,
  bars: () => <FontAwesomeIcon icon={faBars} />,
  close: () => <FontAwesomeIcon icon={faTimes} />,
  top: () => <FontAwesomeIcon icon={faArrowAltCircleUp} />,
  phone: () => <FontAwesomeIcon icon={faPhone} />,
  shop: () => <FontAwesomeIcon icon={faShop} />,
  info: () => <FontAwesomeIcon icon={faInfo} />,
  add: () => <FontAwesomeIcon icon={faAdd} />,
  facebook: () => <FontAwesomeIcon icon={faFacebook} />,
  messenger: () => <FontAwesomeIcon icon={faFacebookMessenger} />,
  instagram: () => <FontAwesomeIcon icon={faInstagram} />,
  telegram: () => <FontAwesomeIcon icon={faTelegram} />,
  whatsapp: () => <FontAwesomeIcon icon={faWhatsapp} />,
  twitter: () => <FontAwesomeIcon icon={faTwitter} />
};

// Exporta o objeto para ser usado em outros arquivos
export default iconComponents;
