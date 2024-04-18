import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook, faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

// Objeto que mapeia os nomes dos ícones aos seus respectivos componentes
const iconComponents = {
  home: () => <FontAwesomeIcon icon={faHome} />,
  addressBook: () => <FontAwesomeIcon icon={faAddressBook} />,
  shoppingCart: () => <FontAwesomeIcon icon={faShoppingCart} />,
  bars: () => <FontAwesomeIcon icon={faBars} />,
  close: () => <FontAwesomeIcon icon={faClose} />,
};

// Exporta o objeto para ser usado em outros arquivos
export default iconComponents;
