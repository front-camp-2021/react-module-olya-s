import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectPurchaseProductsCount } from '../../features/products/selectors';
import './style.css';

const Header = () => {
  const history = useHistory();
  const purchaseCount = useSelector(selectPurchaseProductsCount);

  const goToMainPage = () => {
    history.push("/");
  }

  const goToCart = () => {
    history.push("/cart");
  }

  return (
    <header className="header">
      <nav className="header__logo-link" onClick={goToMainPage}>
        <img className="header__image" src="images/logo.svg" alt="shop logo" />
        <h1 className="header__title">Online Store</h1>
      </nav>
      <div className="header__cart-image" onClick={goToCart}>
        {!!purchaseCount &&
          <div className="header__purchase-count">{purchaseCount}</div>}
        <img src="images/shopping-cart.svg" alt="add to cart" />
      </div>
    </header>
  )
}

export default Header;