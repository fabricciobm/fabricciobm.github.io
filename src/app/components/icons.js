import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faAddressBook, 
  faShoppingCart, 
  faBars, 
  faTimes,
  faArrowAltCircleUp,
  faPhone,
  faMailBulk,
  faRoute,
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
  faXTwitter,
  faLinkedin,
  faYoutube,
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
  mail: () => <FontAwesomeIcon icon={faMailBulk} />,
  route: () => <FontAwesomeIcon icon={faRoute} />,
  shop: () => <FontAwesomeIcon icon={faShop} />,
  info: () => <FontAwesomeIcon icon={faInfo} />,
  add: () => <FontAwesomeIcon icon={faAdd} />,
  facebook: () => <FontAwesomeIcon icon={faFacebook} />,
  messenger: () => <FontAwesomeIcon icon={faFacebookMessenger} />,
  instagram: () => <FontAwesomeIcon icon={faInstagram} />,
  telegram: () => <FontAwesomeIcon icon={faTelegram} />,
  whatsapp: () => <FontAwesomeIcon icon={faWhatsapp} />,
  twitter: () => <FontAwesomeIcon icon={faTwitter} />,
  Xtwitter: () => <FontAwesomeIcon icon={faXTwitter} />,
  linkedin: () => <FontAwesomeIcon icon={faLinkedin} />,
  Youtube: () => <FontAwesomeIcon icon={faYoutube} />
};

// Exporta o objeto para ser usado em outros arquivos
export default iconComponents;
