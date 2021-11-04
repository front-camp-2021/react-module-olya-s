import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectPurchaseProductsCount } from '../../features/products/selectors';
import './style.css';
// import logo from `${process.env.PUBLIC_URL}/images/logo.svg`;

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
        <img className="header__image" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="shop logo" />
        <h1 className="header__title">Online Store</h1>
      </nav>
      <div className="header__cart-image" onClick={goToCart}>
        {!!purchaseCount &&
          <div className="header__purchase-count">{purchaseCount}</div>}
        <img src={`${process.env.PUBLIC_URL}/images/shopping-cart.svg`} alt="add to cart" />
      </div>
    </header>
  )
}

export default Header;