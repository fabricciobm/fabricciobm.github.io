import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook, faShoppingCart, faBars, faClose, faCartShopping, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';

// Objeto que mapeia os nomes dos ícones aos seus respectivos componentes
const iconComponents = {
  home: () => <FontAwesomeIcon icon={faHome} />,
  addressBook: () => <FontAwesomeIcon icon={faAddressBook} />,
  shoppingCart: () => <FontAwesomeIcon icon={faShoppingCart} />,
  bars: () => <FontAwesomeIcon icon={faBars} />,
  close: () => <FontAwesomeIcon icon={faClose} />,
  top: () => <FontAwesomeIcon icon={faTurnUp} />,
};

// Exporta o objeto para ser usado em outros arquivos
export default iconComponents;
